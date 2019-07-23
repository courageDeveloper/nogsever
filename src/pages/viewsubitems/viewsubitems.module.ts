import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewsubitemsPage } from './viewsubitems';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';


@NgModule({
  declarations: [
    ViewsubitemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewsubitemsPage),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    Ng2AutoCompleteModule
  ],
})
export class ViewsubitemsPageModule { }
