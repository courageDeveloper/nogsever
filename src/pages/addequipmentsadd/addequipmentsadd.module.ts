import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddequipmentsaddPage } from './addequipmentsadd';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
  declarations: [
    AddequipmentsaddPage,
  ],
  imports: [
    Ng2AutoCompleteModule,
    IonicPageModule.forChild(AddequipmentsaddPage),
  ],
})
export class AddequipmentsaddPageModule {}
