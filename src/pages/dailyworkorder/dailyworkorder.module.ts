import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyworkorderPage } from './dailyworkorder';

@NgModule({
  declarations: [
    DailyworkorderPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyworkorderPage),
  ],
})
export class DailyworkorderPageModule {}
