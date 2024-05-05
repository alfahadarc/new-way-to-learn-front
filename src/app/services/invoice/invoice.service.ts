import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../../models/invoice';
import { invoiceUrl } from '../../../config/api';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { 
  }

  public findAll(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(invoiceUrl);
  }

  public save(invoice: Invoice, id:number): Observable<Invoice> {
    return this.http.post<Invoice>(invoiceUrl+"/"+id, invoice);
  }
}
