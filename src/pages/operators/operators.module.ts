import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperatorsPage } from './operators';

@NgModule({
  declarations: [
    OperatorsPage,
  ],
  imports: [
    IonicPageModule.forChild(OperatorsPage),
  ],
})
export class OperatorsPageModule {}
