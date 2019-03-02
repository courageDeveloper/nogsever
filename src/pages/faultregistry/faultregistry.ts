import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Platform, NavParams, AlertController } from 'ionic-angular';
import { PouchService } from '../../pouch-service/pouch.service';
import { Faultregistry } from '../../models/faultregistry';
import { HttpserviceProvider } from '../../providers/httpservice';
import { trigger, style, transition, animate, state, keyframes, query, stagger } from '@angular/animations';

/**
 * Generated class for the FaultregistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-faultregistry',
    templateUrl: 'faultregistry.html',
    animations: [
        trigger('elementState', [
            state('false', style({
                opacity: 1
            })),
            state('true', style({
                opacity: 0
            })),
            transition('false => true', animate('500ms ease-in')),
            transition('true => false', animate('500ms ease-out'))
        ])
    ]
})
export class FaultregistryPage {
    filteredFaultregistry: Array<Faultregistry> = [];
    public faultregistrys: Array<Faultregistry> = [];
    localStorageItem;
    position;
    public user: any;
    show = false;
    status;
    disabled = false;
    disabled2 = false;
    allRegistry;
    filterManager;
    filterHse;
    filterAreaSupervisor;
    filterOperator;
    supervisorArray;

    constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams, public modalCtrl: ModalController, public httpService: HttpserviceProvider, public alertCtrl: AlertController, public db: PouchService, ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FaultregistryPage');
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(item => {
            this.user = item;
            this.position = item.post;
            if (this.position == 'Operator' || this.position == 'Admin') {
                this.show = true
            }
        });
        this._loadFaultregistrys();
    }

    ionViewDidEnter() {
        this.localStorageItem = JSON.parse(localStorage.getItem('user'));
        this.db.getSupervisor(this.localStorageItem).then(item => {
            this.user = item;
            this.position = item.post;
            if (this.position == 'Operator' || this.position == 'Admin') {
                this.show = true
            }
        });
        this._loadFaultregistrys();
    }

    private _loadFaultregistrys(): void {
        this.db.getfaultregistrys()
            .then((faultregistrys: Array<Faultregistry>) => {
                this.filteredFaultregistry = faultregistrys.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');
                this.faultregistrys = faultregistrys.filter(data => data.department == this.user.departments || this.user.post == 'Manager' || this.user.post == 'Admin' || this.user.departments == 'HSE');
                this.filteredFaultregistry.forEach(faultregistry => {
                    if (faultregistry.status == true) {
                        setInterval(() => {
                            faultregistry.animateswitch = false;
                        }, 500)
                        setInterval(() => {
                            faultregistry.animateswitch = true;
                        }, 1000)
                    }
                });
            });
    }

    back() {
        this.navCtrl.pop();
    }

    filterFaultregistrys($event: any): void {
        const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredFaultregistry = [];

        for (let faultregistry of this.faultregistrys) {
            if (faultregistry.name.toLowerCase().indexOf(value) !== -1) {
                this.filteredFaultregistry.push(faultregistry);
            }
        }
    }

    newRegistry() {
        let modal = this.modalCtrl.create('AddfaultregistryPage', { type: 'Add' });
        modal.onDidDismiss((data) => {
            if (data) {
                this._loadFaultregistrys();
            }
        });
        modal.present();
    }

    openRegistry(faultregistry?: any): void {
        console.log(faultregistry);
        let modal = this.modalCtrl.create('AddfaultregistryPage', { type: 'Edit', faultregistry: faultregistry });
        modal.onDidDismiss((data) => {
            this._loadFaultregistrys();
        });
        modal.present();
    }

    deleteRegistry(faultregistry: Faultregistry) {
        if (this.position == 'Supervisor' || this.position == 'Manager') {
            const alert = this.alertCtrl.create({
                title: 'Delete Fault Registry',
                message: 'Are you sure you want to delete fault registry: flt-00' + faultregistry.faultid,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Confirm',
                        handler: () => {
                            this.db.deletefaultregistry(faultregistry)
                                .then((success: boolean) => {
                                    this._loadFaultregistrys();
                                });
                        }
                    }
                ]
            });
            alert.present();
        }
    }

    fixed(registry) {
        registry.color = "";
        registry.status = false;
        registry.fixedstatus = true;
        registry.animateswitch = false;
        registry.managerstatus = true;
        registry.supervisorstatus = true;
        this.db.updatefaultregistry(registry).then(res => {
            this._loadFaultregistrys();

            this.db.getSupervisors().then(supervisors => {
                this.filterManager = supervisors.filter(data => data.post == 'Manager');
                this.filterHse = supervisors.filter(data => data.departments == 'HSE');
                this.filterAreaSupervisor = supervisors.filter(data => data.post == 'Supervisor' && data.departments == this.user.departments);
                this.filterOperator = supervisors.filter(data => data.post == 'Operator' && data.departments == this.user.departments);


                this.supervisorArray = [];
                this.filterManager.forEach(item => {
                    this.supervisorArray.push(item.email);
                });
                this.filterHse.forEach(item => {
                    this.supervisorArray.push(item.email);
                });
                this.filterAreaSupervisor.forEach(item => {
                    this.supervisorArray.push(item.email);
                });

                this.filterOperator.forEach(item => {
                    this.supervisorArray.push(item.email);
                });


                var emailInfo = {
                    name: this.user.name,
                    department: this.user.departments,
                    email: this.supervisorArray,
                    phoneNumber: this.user.mobile,
                    position: this.user.position,
                    faultid: registry.faultid,
                    description: registry.description,
                    location: registry.location,
                    facility: registry.faculty,
                    type: 'fixed',
                    datecreated: registry.datecreated,
                    equipmentcatname: registry.equipmentcatname,
                    equipmenttag: registry.equipmenttag,
                    equipmentpartname: registry.equipmentpartname,
                    tagname: registry.tagname
                }

                this.httpService.sendEmailfaultregistry(emailInfo).subscribe(res => {
                });

                if (this.platform.is('cordova')) {
                    this.httpService.faultNotification(emailInfo).subscribe(res => {
                    })
                }
            })
        });
    }

    approve(registry) {
        console.log(registry);
        registry.color = "";
        registry.status = false;
        registry.fixedstatus = true;
        registry.animateswitch = false;
        this.db.updatefaultregistry(registry).then(res => {
            this._loadFaultregistrys();

            this.db.getSupervisors().then(supervisors => {
                this.filterManager = supervisors.filter(data => data.post == 'Manager');
                this.filterHse = supervisors.filter(data => data.departments == 'HSE');
                this.filterAreaSupervisor = supervisors.filter(data => data.post == 'Supervisor' && data.departments == this.user.departments);
                this.filterOperator = supervisors.filter(data => data.post == 'Operator' && data.departments == this.user.departments);


                this.supervisorArray = [];
                this.filterManager.forEach(item => {
                    this.supervisorArray.push(item.email);
                });
                this.filterHse.forEach(item => {
                    this.supervisorArray.push(item.email);
                });
                this.filterAreaSupervisor.forEach(item => {
                    this.supervisorArray.push(item.email);
                });

                this.filterOperator.forEach(item => {
                    this.supervisorArray.push(item.email);
                });
                console.log(this.supervisorArray);

                var emailInfo = {
                    name: this.user.name,
                    department: this.user.departments,
                    email: this.supervisorArray,
                    phoneNumber: this.user.mobile,
                    position: this.user.position,
                    faultid: registry.faultid,
                    description: registry.description,
                    location: registry.location,
                    facility: registry.faculty,
                    type: 'approve',
                    datecreated: registry.datecreated,
                    equipmentcatname: registry.equipmentcatname,
                    equipmenttag: registry.equipmenttag,
                    equipmentpartname: registry.equipmentpartname,
                    tagname: registry.tagname
                }

                this.httpService.sendEmailfaultregistry(emailInfo).subscribe(res => {
                });

                if (this.platform.is('cordova')) {
                    this.httpService.faultNotification(emailInfo).subscribe(res => {
                    })
                }

                this.db.deletefaultregistry(registry).then(res => {
                    this._loadFaultregistrys();
                })
            })

        });



    }

    disapprove(registry) {
        registry.color = "faulty";
        registry.status = true;
        registry.fixedstatus = false;
        registry.animateswitch = true;
        registry.operatorstatus = true;
        this.db.updatefaultregistry(registry).then(res => {
            this._loadFaultregistrys();

            this.db.getSupervisors().then(supervisors => {
                this.filterManager = supervisors.filter(data => data.post == 'Manager');
                this.filterHse = supervisors.filter(data => data.departments == 'HSE');
                this.filterAreaSupervisor = supervisors.filter(data => data.post == 'Supervisor' && data.departments == this.user.departments);
                this.filterOperator = supervisors.filter(data => data.post == 'Operator' && data.departments == this.user.departments);


                this.supervisorArray = [];
                this.filterManager.forEach(item => {
                    this.supervisorArray.push(item.email);
                });
                this.filterHse.forEach(item => {
                    this.supervisorArray.push(item.email);
                });
                this.filterAreaSupervisor.forEach(item => {
                    this.supervisorArray.push(item.email);
                });

                this.filterOperator.forEach(item => {
                    this.supervisorArray.push(item.email);
                });


                var emailInfo = {
                    name: this.user.name,
                    department: this.user.departments,
                    email: this.supervisorArray,
                    phoneNumber: this.user.mobile,
                    position: this.user.position,
                    faultid: registry.faultid,
                    description: registry.description,
                    location: registry.location,
                    facility: registry.faculty,
                    type: 'disapprove',
                    datecreated: registry.datecreated,
                    equipmentcatname: registry.equipmentcatname,
                    equipmenttag: registry.equipmenttag,
                    equipmentpartname: registry.equipmentpartname,
                    tagname: registry.tagname
                }

                this.httpService.sendEmailfaultregistry(emailInfo).subscribe(res => {
                });

                if (this.platform.is('cordova')) {
                    this.httpService.faultNotification(emailInfo).subscribe(res => {
                    })
                }
            })
        });

    }

    trackByName = (index, item) => {
        return item.id;
      }
    

}
