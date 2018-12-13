import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyreportPage } from './dailyreport';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    DailyreportPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyreportPage),
    Ng2AutoCompleteModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
})
export class DailyreportPageModule {}
