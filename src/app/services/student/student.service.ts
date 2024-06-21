import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';
import { moduleUrl, studentUrl } from '../../../config/api';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { 
  }

  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(studentUrl);
  }

  public save(student: Student): Observable<Student> {
    return this.http.post<Student>(studentUrl, student);
  }

  public getModuleInfo(id: number): Observable<any> {
    return this.http.get(studentUrl+"/moduleInfo/" + id);
  }

  public makeComplete(id:number): Observable<any> {
    return this.http.get(studentUrl+"/addToCompleteList/"+id);
  }

  public allModules(): Observable<any> {
    return this.http.get(moduleUrl);
  }

  public assignModule(studentId: number, moduleId: number): Observable<any> {
    return this.http.get(studentUrl+"/addOngoing/"+studentId+"/"+moduleId);
  }
}
