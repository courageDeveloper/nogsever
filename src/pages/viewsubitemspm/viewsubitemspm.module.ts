import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewsubitemspmPage } from './viewsubitemspm';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';


@NgModule({
  declarations: [
    ViewsubitemspmPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewsubitemspmPage),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    Ng2AutoCompleteModule
  ],
})
export class ViewsubitemspmPageModule { }
