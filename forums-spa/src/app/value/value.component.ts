import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() : void {
    this.http.get('http://localhost:59843/api/values/')
        .subscribe(response => {
          this.values = response;
        }, error => {
          console.log(error);
        });
  }
}
