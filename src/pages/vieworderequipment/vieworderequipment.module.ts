import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VieworderequipmentPage } from './vieworderequipment';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    VieworderequipmentPage,
  ],
  imports: [
    IonicPageModule.forChild(VieworderequipmentPage),
    TooltipsModule.forRoot()
  ],
})
export class VieworderequipmentPageModule {}
