import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddfaultregistryPage } from './addfaultregistry';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
  declarations: [
    AddfaultregistryPage,
  ],
  imports: [
    IonicPageModule.forChild(AddfaultregistryPage),
    Ng2AutoCompleteModule
  ],
})
export class AddfaultregistryPageModule {}
