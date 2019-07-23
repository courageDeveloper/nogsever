import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkpermitPage } from './workpermit';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { EmailComposer } from '@ionic-native/email-composer';
import { HttpClientModule} from '@angular/common/http';
import { WebCamModule } from 'ack-angular-webcam';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    WorkpermitPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkpermitPage),
    HttpClientModule,
    Ng2AutoCompleteModule,
    IonicImageViewerModule,
    WebCamModule
  ],
  providers: [
    EmailComposer,
  ]
})
export class WorkpermitPageModule {}
