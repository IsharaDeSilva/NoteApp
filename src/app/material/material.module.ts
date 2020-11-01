import { NgModule } from '@angular/core';
import {MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCardModule,MatToolbarModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';

const MaterialComponent =[
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  
  declarations: [],
  imports: [
    MaterialComponent
  ],
  exports:[
    MaterialComponent
  ]
})
export class MaterialModule { }
