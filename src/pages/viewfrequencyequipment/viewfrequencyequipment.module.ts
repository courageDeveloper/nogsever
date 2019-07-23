import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewfrequencyequipmentPage } from './viewfrequencyequipment';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    ViewfrequencyequipmentPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewfrequencyequipmentPage),
    TooltipsModule.forRoot()
  ],
})
export class ViewfrequencyequipmentPageModule {}
