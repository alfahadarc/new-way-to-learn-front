import { Injectable } from '@angular/core';
import { Module } from '../../models/module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { moduleUrl } from '../../../config/api';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {


  constructor(private http: HttpClient) { }

  public findAll(): Observable<Module[]> {
    return this.http.get<Module[]>(moduleUrl);
  }

  public addModule(module: Module): Observable<Module> {
    return this.http.post<Module>(moduleUrl, module);
  }

}
