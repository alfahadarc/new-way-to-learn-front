import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// Materials
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';



const MaterialComponents = [
  MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule
  ];

@NgModule({
    exports: [MaterialComponents],
    imports: [MaterialComponents],
  })
  export class MaterialModule {}