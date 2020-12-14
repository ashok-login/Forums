import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Tag } from '../_models/tag';

@Component({
  selector: 'app-multiple-checkboxes',
  templateUrl: './multiple-checkboxes.component.html',
  styleUrls: ['./multiple-checkboxes.component.css']
})
export class MultipleCheckboxesComponent implements OnInit {
  modulesList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};

  constructor() { }

  ngOnInit() {
    this.modulesList = this.getModulesList();
    // this.selectedItems = [
    //   { tag_id: 3, tag_name: 'Pune' },
    //   { tag_id: 4, tag_name: 'Navsari' }
    // ];
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

  getModulesList() {
    var tagsArray = new Array(3);
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
