import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { ViewNoteComponent } from './view-note/view-note.component';

const routes: Routes = [
  {path:"",redirectTo:"/add",pathMatch:"full"},
  {path:"add",component:AddNoteComponent},
  {path:"view",component:ViewNoteComponent},
  {path:"**",redirectTo:"/add",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
