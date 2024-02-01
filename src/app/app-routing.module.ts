import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactComponent } from './all-contact/all-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  {path:'',component:AllContactComponent},
  {path:'add-contact',component:AddContactComponent},
  {path:'view-contact/:id',component:ViewContactComponent},
  {path:'edit-contact/:id',component:EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
