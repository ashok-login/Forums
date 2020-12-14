import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myquill-example1',
  templateUrl: './myquill-example1.component.html',
  styleUrls: ['./myquill-example1.component.css']
})
export class MyquillExample1Component implements OnInit {

  public editor_modules: any;
  constructor() { }

  ngOnInit() {
    this.editor_modules = {
      placeHolder: 'Question description goes here',
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
        //['link', 'image'],MYTODO: Need to uncomment this line after getting clarity on how to insert Images by their URL, and image resizing.


        [{ 'direction': 'rtl' }]
      ]
    };
  }
}
