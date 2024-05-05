import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';
import { studentUrl } from '../../../config/api';

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
}
