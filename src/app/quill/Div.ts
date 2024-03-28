import Quill from 'quill';

const Block:any = Quill.import('blots/block');

class Div extends Block {
  static blotName = 'Ayush-div';
  static tagName = 'div';

  static create(value) {
    const node = super.create(value);
    return node;
  }
}

Quill.register(Div);

export default Div;
