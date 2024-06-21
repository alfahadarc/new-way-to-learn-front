import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Invoice } from '../../../models/invoice';
import { Student } from '../../../models/student';
import { InvoiceService } from '../../../services/invoice/invoice.service';
import { ToastrService } from 'ngx-toastr';

enum Month {
  Jan = 'January',
  Feb = 'February',
  Mar = 'March',
  Apr = 'April',
  May = 'May',
  Jun = 'June',
  Jul = 'July',
  Aug = 'August',
  Sep = 'September',
  Oct = 'October',
  Nov = 'November',
  Dec = 'December'
}

@Component({
  selector: 'app-gen-invoice',
  templateUrl: './gen-invoice.component.html',
  styleUrl: './gen-invoice.component.css'
})



export class GenInvoiceComponent {
  invoiceForm!: FormGroup;


  months = Object.values(Month);
  studentName:String = '';
  date:String = '';

  constructor(private dialogRef:MatDialogRef<GenInvoiceComponent>,private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: Student, private invoiceService:InvoiceService, private toastrService:ToastrService) { }

  ngOnInit() {  
    this.date = new Date().toDateString();
    this.createForm();
    this.initForm(this.data);
  }

  createForm() {
    this.invoiceForm = this.fb.group({
      student_id: [''],
      month: ['',Validators.required],
      amount: ['',Validators.required],
    });
  }

  initForm(student: Student) {
    this.studentName = student.name;
    this.invoiceForm.patchValue({
      student_id: student.id,
    });
  }
  onSubmit() {
    console.log(this.invoiceForm.value);
    this.invoiceService.save(this.invoiceForm.value, this.data.id).subscribe({
      next: (data) => {
        this.toastrService.success('Invoice generated successfully', 'Success')
        this.dialogRef.close();
      },
      error: (error) => {
        console.log(error);
        this.toastrService.error(error.statusText, "Error")
      }
    });


    }
  }
