import Quill from 'quill';

const Inline:any = Quill.import('blots/embed');

class CustomDragDropBlot extends Inline {
  
  static create(value: any): HTMLElement {
    const node = super.create(value) as HTMLElement;

    node.setAttribute('draggable', 'true');

    node.addEventListener('dragstart', (event) => {
      event.dataTransfer?.setData('text/plain', ''); // Set data as needed
      event.dataTransfer?.setData('application/json', JSON.stringify(value)); // Serialize value as needed
    });

    node.addEventListener('dragend', (event) => {
      console.log('Drag ended');
    });

    return node;
  }
}

CustomDragDropBlot['blotName'] = 'dragdrop';
CustomDragDropBlot['tagName'] = 'span';

Quill.register(CustomDragDropBlot);

export default CustomDragDropBlot;
