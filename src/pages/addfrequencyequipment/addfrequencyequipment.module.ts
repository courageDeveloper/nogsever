import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddfrequencyequipmentPage } from './addfrequencyequipment';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    AddfrequencyequipmentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddfrequencyequipmentPage),
    TooltipsModule.forRoot()
  ],
})
export class AddfrequencyequipmentPageModule {}
