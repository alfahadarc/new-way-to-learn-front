import { Component, ViewChild } from '@angular/core';
import { ModuleService } from '../../../services/module/module.service';
import { Module } from '../../../models/module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrl: './module-details.component.css'
})
export class ModuleDetailsComponent {

  displayedColumns: string[] = ['category', 'grade', 'name', 'description'];
  dataSource!: MatTableDataSource<Module>;
  isLoading: boolean = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private moduleService:ModuleService) {}

  ngOnInit() {
    this.getAllModule();
  }

  getAllModule() {
    this.moduleService.findAll().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
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
    this.getAllModule();
  }

}
