import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, Platform } from 'ionic-angular';
import { Dailyreport } from '../../models/dailyreport';
import { Printer, PrintOptions } from '@ionic-native/printer';
/**
 * Generated class for the PrintdailyreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-printdailyreport',
  templateUrl: 'printdailyreport.html',
})
export class PrintdailyreportPage {
  public dailyReport: Dailyreport;
  options: PrintOptions = {
    name: 'Daily Report',
    //printerId: 'printer007',
    duplex: true,
    landscape: true,
    grayscale: true
  };
  loop = false;

  constructor(private platform: Platform, private printer: Printer, public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
      this.dailyReport = this.navParams.get('dailyreport');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrintdailyreportPage');
    if (this.platform.is('cordova')) {
      this.printMobile();
    }
    else {
        this.printPermit();
    } 
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  printPermit() {
    var win: any;
    win = window;
    var printContent = document.getElementById('printArea').innerHTML;
    var printWindow = win.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
    printWindow.document.open();
    printWindow.document.write(`<html><head><title>Daily Reprot `, `</title><style>
       
    table {
      border-collapse: collapse;
      width: 100%;
    }
    .print-align {
        text-align: center;
    }
    td {
      padding: 5px 0px 5px 15px;
      }

    table, td, th {
      border: 1px solid black;
    }

    .print-margin{
       margin-top: 5px;
    }

    .txt-align{
      text-align: center;
      max-width: 60%;
  }
    .print-td{
      width: 40%;
    }

    .print-orient{
      font-size: 0.5rem;
     
    }
    .logo-print{
      width:291px;
      height:109px;
      display: list-item;
      list-style-image: url(../assets/images/NOG-LOGO.jpg);
      list-style-position: inside;
    }

           </style></head><body></body></html>`);
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  }

  printMobile() {
    this.printer.isAvailable().then((success) => {
      this.printer.print(document.getElementById('printArea').innerHTML, this.options).then();
    }, (error) => {
      console.log('printer not available');
    });
  }

}
