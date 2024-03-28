import Quill from 'quill';

const Inline: any = Quill.import('blots/inline');

export default class CustomDragDropBlot extends Inline {

  static create(value: any, quill: Quill): HTMLElement {

    const node = super.create(value) as HTMLElement;
    node.setAttribute('draggable', 'true');
    console.log(node)

    node.addEventListener('dragstart', (event) => {
      event.dataTransfer?.setData('text/plain', ''); 
      event.dataTransfer?.setData('application/json', JSON.stringify(value)); 
    });

    node.addEventListener('dragend', (event) => {
      console.log('Drag ended');
    });

    node.addEventListener('drop', (event) => {
      event.preventDefault();
      const jsonString = event.dataTransfer?.getData('application/json');
      if (jsonString) {
        const data = JSON.parse(jsonString);
        // dropped data
        dropedData(data, quill);
      }
    });

    return node;
  }
}

CustomDragDropBlot['blotName'] = 'dragdrop';
CustomDragDropBlot['tagName'] = 'span';

function dropedData(data: any, quill: Quill) {
  // Example: Inserting the dropped data into the editor
  const range = quill.getSelection();
  quill.insertEmbed(range?.index || 0, 'dragdrop', data);
}
