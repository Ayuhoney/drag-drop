import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quill from 'quill';
import DragDropBlot from './custom-drag-drop-module';

@Component({
  selector: 'app-editor',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.css']
})
export class EditorComponent implements OnInit {
  
  @ViewChild('editor', { static: true }) editorElement: ElementRef;
  
  public quill: Quill;
  
  ngOnInit() {

    Quill.register(DragDropBlot); 

    if (this.editorElement) {
      this.quill = new Quill(this.editorElement.nativeElement, {
        theme: 'snow',
        modules: {
          toolbar: true,
        },
      });
    } else {
      console.error('Quill editor container not found.');
    }
  }
}
