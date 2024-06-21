import { Component, ViewChild } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceService } from '../../services/invoice/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {

  displayedColumns: string[] = ['name', 'mobile', 'month', 'amount', 'createdAt'];
  dataSource!: MatTableDataSource<any>;
  isLoading: boolean = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private invoiceService: InvoiceService) { }

 ngOnInit() {
    this.getAllInvoices();
  }

  getAllInvoices() {
    this.invoiceService.findAll().subscribe({
      next: (data) => {
        let modifiedData = data.map((invoice: Invoice) => {
          return {
            ...invoice,
            name: invoice.student.name,
            mobile: invoice.student.mobile,
            createdAt: new Date(invoice.created_at).toDateString()
          }
        });

        this.dataSource = new MatTableDataSource(modifiedData);
        this.isLoading = false;
      },
      error: (e) => console.error(e),
      complete: () => {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  refresh(){
    this.isLoading = true;
    this.getAllInvoices();
  }


}
