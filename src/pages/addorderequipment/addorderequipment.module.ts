import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddorderequipmentPage } from './addorderequipment';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    AddorderequipmentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddorderequipmentPage),
    TooltipsModule.forRoot()
  ],
})
export class AddorderequipmentPageModule {}
