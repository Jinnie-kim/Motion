import { Component } from './components/component.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent } from './components/page/page.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    this.page.addChild(image);

    const video = new VideoComponent('브람스를 좋아합니다.', 'https://www.youtube.com/watch?v=lysguDnH7uI');
    this.page.addChild(video);

    const note = new NoteComponent('This is note title', 'This is note body');
    this.page.addChild(note);

    const todo = new TodoComponent('오늘 할 일', '드림코딩 실전 프로젝트 완성하기');
    this.page.addChild(todo);
  }
}

new App(document.querySelector('.document')! as HTMLElement);
