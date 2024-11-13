import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
// import { DialogComponent } from './components/page/item/\bdialog.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
    const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
    const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;

    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const mediaSection = new MediaSectionInput();
      dialog.addChild(mediaSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가해준다.
        const image = new ImageComponent(mediaSection.title, mediaSection.url);
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
      });
    });

    videoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const mediaSection = new MediaSectionInput();
      dialog.addChild(mediaSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가해준다.
        const video = new VideoComponent(mediaSection.title, mediaSection.url);
        this.page.addChild(video);
        dialog.removeFrom(dialogRoot);
      });
    });

    noteBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const textSection = new TextSectionInput();
      dialog.addChild(textSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가해준다.
        const note = new NoteComponent(textSection.title, textSection.body);
        this.page.addChild(note);
        dialog.removeFrom(dialogRoot);
      });
    });

    todoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const textSection = new TextSectionInput();
      dialog.addChild(textSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가해준다.
        const todo = new TodoComponent(textSection.title, textSection.body);
        this.page.addChild(todo);
        dialog.removeFrom(dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);

// const IMAGE_BUTTON = document.querySelector('#new-image')! as HTMLButtonElement;

// IMAGE_BUTTON.addEventListener('click', () => {
//   const dialog = new DialogComponent();

// });
