import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddfaultregistryPage } from './addfaultregistry';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { WebCamModule } from 'ack-angular-webcam';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    AddfaultregistryPage,
  ],
  imports: [
    IonicPageModule.forChild(AddfaultregistryPage),
    Ng2AutoCompleteModule,
    WebCamModule,
    IonicImageViewerModule
  ],
})
export class AddfaultregistryPageModule {}
