import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-mail-template',
  templateUrl: './edit-mail-template.component.html',
  styleUrls: ['./edit-mail-template.component.css']
})
export class EditMailTemplateComponent implements OnInit {

  databaseData: string;
  constructor() { }

  ngOnInit() {
    this.databaseData = '"<p><span style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 102);" class="ql-size-huge">Test color</span></p>"';
  }
}
