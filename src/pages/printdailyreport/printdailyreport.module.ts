import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrintdailyreportPage } from './printdailyreport';
import { Printer } from '@ionic-native/printer';

@NgModule({
  declarations: [
    PrintdailyreportPage,
  ],
  imports: [
    IonicPageModule.forChild(PrintdailyreportPage),
  ],
  providers:[
    Printer
  ]
})
export class PrintdailyreportPageModule {}
