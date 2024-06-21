import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuleService } from '../../../services/module/module.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrl: './addmodule.component.css'
})
export class AddmoduleComponent {
  moduleForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private moduleService:ModuleService,private toastrService: ToastrService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
   this.moduleForm =  this.formBuilder.group({
      category: ['', Validators.required],
      grade: ['', Validators.required],
      name: ['', Validators.required],
      description: ['',Validators.required]
    });
  }

  onSubmit() {
    this.moduleService.addModule(this.moduleForm.value).subscribe({
      next: (data) => {
        this.toastrService.success("Successfully Added", "Success")
      },
      error: (error) => {
        console.log(error);
        this.toastrService.error(error.statusText, "Error")
      }
    });
    }

}
