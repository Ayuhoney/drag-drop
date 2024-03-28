import Quill from 'quill';

const Block:any = Quill.import('blots/block');

export default class Div extends Block {
  static blotName = 'div';
  static tagName = 'div';

  static create(value: any) {
    const node = super.create(value) as HTMLElement;
    return node;
  }
}

Quill.register(Div);
