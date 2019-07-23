import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddnewpreventivemaintenancePage } from './addnewpreventivemaintenance';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
  declarations: [
    AddnewpreventivemaintenancePage,
  ],
  imports: [
    Ng2AutoCompleteModule,
    IonicPageModule.forChild(AddnewpreventivemaintenancePage),
  ],
})
export class AddnewpreventivemaintenancePageModule {}
