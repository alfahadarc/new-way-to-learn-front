import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../services/student/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {

  studentForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private studentService:StudentService,private toastrService: ToastrService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
   this.studentForm =  this.formBuilder.group({
      name: ['', Validators.required],
      father_name: [''],
      mother_name: [''],
      mobile: ['',Validators.required],
      address: ['',Validators.required],
      dob:['',Validators.required],
      grade:['',Validators.required],
    });
  }

  onSubmit() {
    console.log(this.studentForm.value);

    this.studentService.save(this.studentForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.toastrService.success("Successfully Added", "Success")
      },
      error: (error) => {
        console.log(error);
        this.toastrService.error(error.statusText, "Error")
      }
    });
    }

  }
