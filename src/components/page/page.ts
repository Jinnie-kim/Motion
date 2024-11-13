import { BaseComponent, Component } from './../component.js';

export interface Composable {
  addChild(child: Component): void;
}

export type OnCloseListener = () => void;

export interface SectionContainer extends Component, Composable {
  setOnCloseListener(listner: OnCloseListener): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer; // 생성자를 정의하는 타입
};

// export class DarkPageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer  {}
export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
  private closeListener?: OnCloseListener;

  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);
    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector('.page-item__body')! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  // private readonly itemList: Component;

  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
    // this.itemList = item;
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor(); // DI를 사용해서 수정해보기
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
