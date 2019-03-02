import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { HttpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { PouchService} from './../pouch-service/pouch.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneSignal } from '@ionic-native/onesignal';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { MyApp } from './app.component';
import { HttpserviceProvider } from '../providers/httpservice';

//import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    //HomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2AutoCompleteModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage
  ],
  providers: [
    StatusBar,
    PouchService,
    OneSignal,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpserviceProvider
  ]
})
export class AppModule {}
