import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkpermitPage } from './workpermit';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { EmailComposer } from '@ionic-native/email-composer';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    WorkpermitPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkpermitPage),
    HttpClientModule,
    Ng2AutoCompleteModule
  ],
  providers: [
    EmailComposer
  ]
})
export class WorkpermitPageModule {}
