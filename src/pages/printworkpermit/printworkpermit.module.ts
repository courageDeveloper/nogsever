import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrintworkpermitPage } from './printworkpermit';
import { Printer } from '@ionic-native/printer';

@NgModule({
  declarations: [
    PrintworkpermitPage,
  ],
  imports: [
    IonicPageModule.forChild(PrintworkpermitPage),
  ],
  providers:[
    Printer
  ]
})
export class PrintworkpermitPageModule {}
