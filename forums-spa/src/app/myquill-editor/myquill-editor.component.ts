import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-myquill-editor',
  templateUrl: './myquill-editor.component.html',
  styleUrls: ['./myquill-editor.component.css']
})
export class MyquillEditorComponent implements OnInit {
  @ViewChild('editor', {static : true}) editor: NgForm;
  blured = false;
  focused = false;
  public editor_modules: any;
  editorText: string;

  ngOnInit(): void {
    this.init_editor_modules()
  }
  changedEditor(event: EditorChangeContent | EditorChangeSelection): void
  {
    this.editorText = event['editor']['root']['innerHTML'];
  }

  init_editor_modules(): void {
    this.editor_modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'],
        ['link', 'image'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'direction': 'rtl' }]
      ]
    };
  }
}
