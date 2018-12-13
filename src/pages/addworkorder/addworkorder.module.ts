import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddworkorderPage } from './addworkorder';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
  declarations: [
    AddworkorderPage,
  ],
  imports: [
    Ng2AutoCompleteModule,
    IonicPageModule.forChild(AddworkorderPage),
  ],
})
export class AddworkorderPageModule {}
