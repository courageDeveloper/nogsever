import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkerschedulePage } from './workerschedule';

@NgModule({
  declarations: [
    WorkerschedulePage,
  ],
  imports: [
    IonicPageModule.forChild(WorkerschedulePage),
  ],
})
export class WorkerschedulePageModule {}
