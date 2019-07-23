import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewworkpermitPage } from './viewworkpermit';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    ViewworkpermitPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewworkpermitPage),
    IonicImageViewerModule
  ],
})
export class ViewworkpermitPageModule {}
