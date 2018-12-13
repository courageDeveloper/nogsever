import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddworkerschedulePage } from './addworkerschedule';
import { Ng2AutoCompleteModule} from 'ng2-auto-complete';


@NgModule({
  declarations: [
    AddworkerschedulePage,
  ],
  imports: [
    Ng2AutoCompleteModule,
    IonicPageModule.forChild(AddworkerschedulePage),
  ],
})
export class AddworkerschedulePageModule {}
