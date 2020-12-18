import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { Observable } from 'rxjs';
import { Module } from '../_models/module';
import { AlertifyService } from '../_services/alertify.service';
import { ModuleService } from '../_services/module.service';

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

  selectedItems = [];
  modulesList: any[];
  dropdownSettings:IDropdownSettings = {};
  
  constructor(private moduleService: ModuleService, private alertify: AlertifyService) {
    
  }

  ngOnInit(): void {
    this.init_editor_modules();
    this.getModulesList();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'moduleName',
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

  getModulesList() {
    var modulesArray = new Array(3);// MYTODO: Why do I need this 3?
    this.moduleService.getModules().subscribe((modules: Module[]) => {
      this.modulesList = modules;
    }, error => {
      this.alertify.error(error);
    });
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
