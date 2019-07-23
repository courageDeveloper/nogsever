import { Component } from '@angular/core';
import { IonicPage, ModalController, Platform, NavController, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Supervisor } from '../../models/supervisor';

/**
 * Generated class for the ManagersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-managers',
    templateUrl: 'managers.html',
})
export class ManagersPage {
    public filteredSupervisors: Array<Supervisor> = [];;
    public supervisors: Array<Supervisor> = [];
    localStorageItem: any;
    user: any;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public platform: Platform, public db: PouchService, public navParams: NavParams, public modalCtrl: ModalController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ManagersPage');
        this.platform.ready()
            .then(() => {
                this._loadSupervisors();
            });

        this.localStorageItem = JSON.parse(localStorage.getItem('user'));

        this.db.getSupervisor(this.localStorageItem).then(item => {
            this.user = item;
        })

    }

    /**
    * On display page
    */
    ionViewDidEnter() {
        this._loadSupervisors();
    }

    private _loadSupervisors(): void {
        this.db.getSupervisors()
            .then((supervisors: Array<Supervisor>) => {
                this.filteredSupervisors = supervisors.filter(data => data.post == 'Manager');
                this.supervisors = supervisors.filter(data => data.post == 'Manager');
            });
    }

    back() {
        this.navCtrl.pop();
    }

    newManager(): void {
        let modal = this.modalCtrl.create('AddmanagerPage', { type: 'Add' });
        modal.onDidDismiss((data) => {
            if (data) {
                this._loadSupervisors();
            }
        });
        modal.present();
    }

    openManager(manager?: any): void {
        let modal = this.modalCtrl.create('AddmanagerPage', { type: 'Edit', manager: manager });
        modal.onDidDismiss((data) => {
            this._loadSupervisors();
        });
        modal.present();
    }

    filterSupervisors($event: any): void {
        const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredSupervisors = [];

        for (let supervisor of this.supervisors) {
            if (supervisor.name.toLowerCase().indexOf(value) !== -1) {
                this.filteredSupervisors.push(supervisor);
            }
        }
    }

    deleteManager(manager: Supervisor) {
        const alert = this.alertCtrl.create({
            title: 'Delete Manager',
            message: 'Are you sure you want to delete manager: ' + manager.name,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    handler: () => {
                        this.db.deleteSupervisor(manager)
                            .then((success: boolean) => {
                                this._loadSupervisors();
                            });
                    }
                }
            ]
        });
        alert.present();
    }
}
