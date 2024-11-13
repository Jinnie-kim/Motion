import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
// import { DialogComponent } from './components/page/item/\bdialog.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
    const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
    const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;

    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog('image');

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });

      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가해준다.

        const [title, body] = dialog.getUserData();
        const image = new ImageComponent(title as string, body as string);
        this.page.addChild(image);
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });

    videoBtn.addEventListener('click', () => {
      const dialog = new InputDialog('video');

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });

      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가해준다.
        // const video = new VideoComponent('브람스를 좋아합니다.', 'https://www.youtube.com/watch?v=lysguDnH7uI');
        const [title, body] = dialog.getUserData();
        const video = new VideoComponent(title as string, body as string);
        this.page.addChild(video);
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });

    noteBtn.addEventListener('click', () => {
      const dialog = new InputDialog('note');

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });

      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가해준다.
        const [title, body] = dialog.getUserData();
        const note = new NoteComponent(title as string, body as string);
        this.page.addChild(note);
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });

    todoBtn.addEventListener('click', () => {
      const dialog = new InputDialog('todo');

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });

      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가해준다.
        const [title, body] = dialog.getUserData();
        const todo = new TodoComponent(title as string, body as string);
        this.page.addChild(todo);
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement);

// const IMAGE_BUTTON = document.querySelector('#new-image')! as HTMLButtonElement;

// IMAGE_BUTTON.addEventListener('click', () => {
//   const dialog = new DialogComponent();

// });
