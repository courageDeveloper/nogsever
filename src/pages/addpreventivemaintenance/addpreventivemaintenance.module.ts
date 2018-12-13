import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddpreventivemaintenancePage } from './addpreventivemaintenance';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AddpreventivemaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(AddpreventivemaintenancePage),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
})
export class AddpreventivemaintenancePageModule { }
