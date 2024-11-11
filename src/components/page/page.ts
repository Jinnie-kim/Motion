// Page, 부모 컨테이너에 대한 요소들

import { BaseComponent } from '../component.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class"page">This is PageComponent</ul>');
  }
}
