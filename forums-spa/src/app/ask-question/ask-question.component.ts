import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  @ViewChild('editor', {static : true}) editor: NgForm;
  blured = false;
  focused = false;
  public editor_modules: any;
  editorText: string;

  modulesList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};
  
  ngOnInit(): void {
    this.init_editor_modules();
    this.modulesList = this.getModulesList();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'tag_id',
      textField: 'tag_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
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
        // ['link', 'image'], ,MYTODO: Need to uncomment this line after getting clarity on how to insert Images by their URL, and image resizing.
        [{ 'color': [] }, { 'background': [] }],
        [{ 'direction': 'rtl' }]
      ]
    };
  }

  getModulesList(): any {
    var tagsArray = new Array(3);// MYTODO: Why do I need this 3?
    tagsArray[0] = { tag_id: 1, tag_name: 'TVLLVL' };
    tagsArray[1] = { tag_id: 2, tag_name: 'Account Management' };
    tagsArray[2] = { tag_id: 3, tag_name: 'Finance' };
    tagsArray[3] = { tag_id: 4, tag_name: 'TER' };
    tagsArray[4] = { tag_id: 5, tag_name: 'TP' };
    tagsArray[5] = { tag_id: 6, tag_name: 'Payments' };
    tagsArray[6] = { tag_id: 7, tag_name: 'Case Management' };
    tagsArray[7] = { tag_id: 8, tag_name: 'Trip Posing' };
    return tagsArray;
  }

  onItemSelect(item: any) {
    console.log('After ' + item.tag_name + ' has been selected, below are the list of items available in the selectedItems list.');
    for(let i = 0; i < this.selectedItems.length; i++) {
      console.log(this.selectedItems[i].tag_name);
    }    
  }

  onItemDeSelect(item: any) {
    console.log('After ' + item.tag_name + ' has removed, below are the items available in the selectedItems list.');
    for(let i = 0; i < this.selectedItems.length; i++) {
      console.log(this.selectedItems[i].tag_name);
    }
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }

  showSelectedTags() {
    for(let i=0; i<this.selectedItems.length; i++) {
      console.log(this.selectedItems[i].tag_id + ' - ' + this.selectedItems[i].tag_name);
    }
  }
}
