import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddpreventivemaintenancePage } from './addpreventivemaintenance';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';


@NgModule({
  declarations: [
    AddpreventivemaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(AddpreventivemaintenancePage),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    Ng2AutoCompleteModule
  ],
})
export class AddpreventivemaintenancePageModule { }
