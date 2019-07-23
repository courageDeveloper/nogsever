import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FixedPage } from './fixed';
import { WebCamModule } from 'ack-angular-webcam';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    FixedPage,
  ],
  imports: [
    IonicPageModule.forChild(FixedPage),
    WebCamModule,
    IonicImageViewerModule
  ],
})
export class FixedPageModule {}
