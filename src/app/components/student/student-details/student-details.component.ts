import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  studentForm!: FormGroup;

  constructor(private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Student ) { }

  ngOnInit() {
    console.log(this.data);
    this.createForm();
    this.initForm(this.data);
  }

  createForm() {
    this.studentForm =  this.fb.group({
       name: ['', Validators.required],
       father_name: [''],
       mother_name: [''],
       mobile: ['',Validators.required],
       address: ['',Validators.required],
       dob:['',Validators.required],
       created_at:[''],
     });
   }

    initForm(student: Student) {
      this.studentForm.patchValue({
        name: student.name,
        father_name: student.father_name,
        mother_name: student.mother_name,
        mobile: student.mobile,
        address: student.address,
        dob: student.dob,
        created_at: student.created_at
      });
    }
    onSubmit() {
      console.log(this.studentForm.value);
    }

}
