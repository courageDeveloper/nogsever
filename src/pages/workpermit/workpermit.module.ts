import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkpermitPage } from './workpermit';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
  declarations: [
    WorkpermitPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkpermitPage),
    Ng2AutoCompleteModule
  ],
})
export class WorkpermitPageModule {}
