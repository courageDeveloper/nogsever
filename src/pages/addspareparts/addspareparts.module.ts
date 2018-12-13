import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddsparepartsPage } from './addspareparts';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
  declarations: [
    AddsparepartsPage,
  ],
  imports: [
    Ng2AutoCompleteModule,
    IonicPageModule.forChild(AddsparepartsPage),
  ],
})
export class AddsparepartsPageModule {}
