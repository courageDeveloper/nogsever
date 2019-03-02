import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PouchService } from './../pouch-service/pouch.service';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HttpserviceProvider } from '../providers/httpservice';
import { Observable } from 'rxjs/Rx';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'LoginPage';
  localStorageItem;

  constructor(platform: Platform, private oneSignal: OneSignal, public httpService: HttpserviceProvider, statusBar: StatusBar, public db: PouchService, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.db.initDB();
      statusBar.styleDefault();
      splashScreen.hide();

      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      /*  var notificationOpenedCallback = function (jsonData) {
         alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
       };
 
       window["plugins"].OneSignal
         .startInit("3bcabf2d-92f3-4d45-b7d8-b6d1a9769fb5", "496629233073")
         .handleNotificationOpened(notificationOpenedCallback)
         .endInit(); */

      if (platform.is('cordova')) {
        /* alert("One Signal"); */
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.startInit('40a46202-dc72-4f76-bc8f-c692e075aec6', '496629233073');

        this.oneSignal.handleNotificationReceived().subscribe((notification) => {
          /* alert(JSON.stringify(notification)); */
        });
        this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));

        this.oneSignal.endInit();
      }
      else {
       console.log("Logged in web");
      }
    });
    this.localStorageItem = JSON.parse(localStorage.getItem('user'));

    setTimeout(() => {
      this.process();
    }, 1000);

  }

  private onPushReceived(payload: OSNotificationPayload) {
    alert('Push recevied:' + payload.body);
  }
  
  private onPushOpened(payload: OSNotificationPayload) {
    alert('Push opened: ' + payload.body);
  }


  process() {
    if (this.localStorageItem) {
      this.db.getSupervisor(this.localStorageItem).then(item => {
        if (item.post == 'Manager') {
          this.rootPage = 'HomePage';
        }
        else if (item.post == 'Supervisor') {
          this.rootPage = 'SupervisorhomePage';
        }
        else if (item.post == 'Operator') {
          this.rootPage = 'OperatorhomePage';
        }
        else {
          this.rootPage = 'AdminHomePage';
        }
      })
    }
    else {
      this.rootPage = 'LoginPage';
    }
  }

}

