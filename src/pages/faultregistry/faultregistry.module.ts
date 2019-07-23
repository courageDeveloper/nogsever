import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaultregistryPage } from './faultregistry';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    FaultregistryPage,
  ],
  imports: [
    IonicPageModule.forChild(FaultregistryPage),
    IonicImageViewerModule
  ],
})
export class FaultregistryPageModule {}
