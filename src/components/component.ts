export interface Component {
  attachTo(parent: HTMLElement, postion?: InsertPosition): void;
}
// Encapsulate the HTML element creation

export class BaseComponent<T extends HTMLElement> implements Component {
  // 상속하는 클래스에서만 접근이 가능하고(읽기만 가능), 외부에서 접근 불가
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
