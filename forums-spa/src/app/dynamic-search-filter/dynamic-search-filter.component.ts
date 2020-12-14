import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-search-filter',
  templateUrl: './dynamic-search-filter.component.html',
  styleUrls: ['./dynamic-search-filter.component.css']
})
export class DynamicSearchFilterComponent implements OnInit {

  modules: string[] = ['TVLLVL', 'Account Management', 'TER', 'Finance', 'Payments', 'Case Management', 'Trip posting'];
  searchName: string = '';
  constructor() { }

  ngOnInit() {
  }

}
