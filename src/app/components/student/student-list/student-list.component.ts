import { Component, ViewChild } from '@angular/core';
import { StudentService } from '../../../services/student/student.service';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../../models/student';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { GenInvoiceComponent } from '../../invoice/gen-invoice/gen-invoice.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  displayedColumns: string[] = ['id', 'name', 'father_name', 'mother_name', 'mobile', 'actions'];
  dataSource!: MatTableDataSource<Student>;
  isLoading: boolean = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private studentService: StudentService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.findAll().subscribe({
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
    this.getAllStudent();
  }

  invoice(student: Student){
    console.log(student);
    const dialogRef = this.dialog.open(GenInvoiceComponent, {
      data: student,
      width:'50%',
      panelClass: 'custom-modalbox'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.getAllBooks()
    // });
  }
  show(student: Student){
    const dialogRef = this.dialog.open(StudentDetailsComponent, {
      data: student,
      width:'50%',
      panelClass: 'custom-modalbox'
    });
  }

}
