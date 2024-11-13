import { BaseComponent, Component } from '../component.js';
import { Composable } from '../page/page.js';

type OnCloseListener = () => void;
type onSubmitListener = () => void;

export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
  closeListener?: OnCloseListener;
  submitListener?: onSubmitListener;

  constructor(option: string) {
    super(`<dialog class="dialog">
            <div class="dialog__container">
              <button class="close">&times;</button>
              <div id="dialog__body">
                <label class="dialog__body_title-label"></label>
                <input class="dialog__body-title"/>

                <label class="dialog__body_text-label"></label>
                <input class="dialog__body-text"/>
              </div>
              <button class="dialog__submit">ADD</button>
            </div>
          </dialog>`);

    const closeBtn = this.element.querySelector('.close')! as HTMLElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };

    let dialogTitleLabel = this.element.querySelector('.dialog__body_title-label')! as HTMLLabelElement;
    let dialogTextLabel = this.element.querySelector('.dialog__body_text-label')! as HTMLLabelElement;

    if (option === 'image') {
      dialogTitleLabel.textContent = 'Image Title';
      dialogTextLabel.textContent = 'Image Url';
    } else if (option === 'video') {
      dialogTitleLabel.textContent = 'Video Title';
      dialogTextLabel.textContent = 'Video Url';
    } else if (option === 'note') {
      dialogTitleLabel.textContent = 'Note Title';
      dialogTextLabel.textContent = 'Note Body';
    } else if (option === 'todo') {
      dialogTitleLabel.textContent = 'Todo Title';
      dialogTextLabel.textContent = 'Todo Body';
    }
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  setOnSubmitListener(listener: onSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component): void {
    const body = this.element.querySelector('#dialog__body')! as HTMLElement;
    child.attachTo(body);
  }

  getUserData() {
    const title = this.element.querySelector('.dialog__body-title')! as HTMLInputElement;
    const body = this.element.querySelector('.dialog__body-text')! as HTMLInputElement;

    return [title.value, body.value];
  }
}
