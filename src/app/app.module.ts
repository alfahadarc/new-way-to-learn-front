import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//Materials
import { MaterialModule } from '../app/materials/material.module'

// component
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentComponent } from './components/student/student.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { GenInvoiceComponent } from './components/invoice/gen-invoice/gen-invoice.component';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { LoginComponent } from './components/login/login.component';
import { authInterceptor } from './interceptors/auth/auth.interceptor';
import { ModuleComponent } from './components/module/module.component';
import { AddmoduleComponent } from './components/module/addmodule/addmodule.component';
import { ModuleDetailsComponent } from './components/module/module-details/module-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    StudentComponent,
    InvoiceComponent,
    StudentListComponent,
    StudentAddComponent,
    GenInvoiceComponent,
    StudentDetailsComponent,
    LoginComponent,
    ModuleComponent,
    AddmoduleComponent,
    ModuleDetailsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    provideAnimationsAsync(),
    {provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
