import Quill from 'quill';

const isRegistered = Quill.imports['formats/Ayush-div'] !== undefined;

let Div: any;

if (!isRegistered) {
  const Block:any = Quill.import('blots/block');

  Div = class Div extends Block {
    static blotName = 'Ayush-div';
    static tagName = 'div';

    static create(value) {
      const node = super.create(value);
      return node;
    }
  };

  Quill.register(Div);
} else {
  Div = Quill.imports['formats/Ayush-div'];
}

export default Div;
