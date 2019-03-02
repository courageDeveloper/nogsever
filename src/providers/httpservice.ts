import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
/*
  Generated class for the HttpserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpserviceProvider Provider');
  }

  sendEmail(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://157.230.209.193:3000/sendemail', user);
    /* return this.http.post('http://157.230.209.193:3000/sendemail', user); */
  }

  sendEmailworkorder(user) {
    console.log(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://157.230.209.193:3000/sendemailworkorder', user);
    /* return this.http.post('http://157.230.209.193:3000/sendemail', user); */
  }

  sendEmailfaultregistry(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://157.230.209.193:3000/sendemailfaultregistry', user);
    /* return this.http.post('http://157.230.209.193:3000/sendemail', user); */
  }

  workpermitNotification(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://157.230.209.193:3000/mobilenotification', user);
    /* return this.http.post('http://157.230.209.193:3000/sendemail', user); */
  }

  faultNotification(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://157.230.209.193:3000/mobilefaultregistry', user);
    /* return this.http.post('http://157.230.209.193:3000/sendemail', user); */
  }

  forgotPassword(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://157.230.209.193:3000/forgotpassword', user);
  }

 /*  watchDate() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:3000/test').pipe(map(res => {
      console.log(res);
    }));
  }
 */
}
