import { Component, Inject, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student/student.service';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  studentForm!: FormGroup;
  onGoingModule: any = null;
  completedModule: any = null;
  availableModule: any = null;
  selectedModuleId: any = -1;
  allEndMessgae: boolean= false;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Student, private studentService: StudentService) { }

  ngOnInit() {
    this.createForm();
    this.initForm(this.data);
    console.log(this.data);
    this.getModuleInfo(this.data.id);

  }

  createForm() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      father_name: [''],
      mother_name: [''],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      created_at: [''],
      grade: ['', Validators.required]
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
      created_at: student.created_at,
      grade: student.grade,
    });
  }
  onSubmit() {
    console.log(this.studentForm.value);
  }

  getModuleInfo(id: number) {
    this.studentService.getModuleInfo(id).subscribe((data) => {
      const moduleInfo = data;
      this.onGoingModule = moduleInfo.onGoingModule;
      this.completedModule = moduleInfo.completedModule;
      this.getAvailableModules();

    });
  }

  makeComplete() {
    this.studentService.makeComplete(this.data.id).subscribe((data) => {
      this.getModuleInfo(this.data.id);
    });
  }

  getAvailableModules() {
    this.studentService.allModules().subscribe((data) => {
      const allModule = data;

      if(this.completedModule !== null && this.completedModule.length > 0) {
        
        this.availableModule = allModule.filter((module:any) => {
          return !this.completedModule.some((completedModuleItem:any) => completedModuleItem.id === module.id);
        });
      }
      else{
        this.availableModule = allModule;
      }

      if(this.availableModule.length === 0) {
        this.allEndMessgae = true;
      }

     

    });
  }
  assignModule() {
    // console.log(this.selectedModuleId);
    this.studentService.assignModule(this.data.id, this.selectedModuleId).subscribe((data) => {
      this.getModuleInfo(this.data.id);
    });
  }

}
