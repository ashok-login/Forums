import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Module } from '../_models/module';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getModules(): Observable<Module[]> {
    let modules = this.http.get<Module[]>(this.baseUrl + 'modules', httpOptions);
    return modules;
  }
}
