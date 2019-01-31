/**
 * Service provider for PouchDB
 * @name pouch-service.ts
 * @author Agbonaye Osaru - osaru@sarutech.com
 */
import { Injectable } from '@angular/core';
declare var require: any;
//import PouchDB from 'pouchdb';
var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));
PouchDB.plugin(require('relational-pouch'));
require('pouchdb-all-dbs')(PouchDB);
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
/**
 * Models
 */
import { Supervisor } from '../models/supervisor';
import { Equipmentcat } from '../models/equipmentcat';
import { Equipmentpart } from '../models/equipmentpart';
import { Equipmentsadd } from '../models/equipmentsadd';
import { Workpermit } from '../models/workpermit';
import { Workorder } from '../models/workorder';
import { Schema } from '../models/relational-schema';

@Injectable()
export class PouchService {

    private db;
    remote: any;
    private pendingSync: Promise<any>;

    /**
    * Constructor
    */
    constructor(public http: Http) {
        console.log('constructor');
    }

    /**
    * Initialize PouchDB database
    */
    initDB() {
        this.db = new PouchDB('ogpooc', { adapter: 'websql' });
        this.db.setSchema(Schema);

        this.enableSyncing();

        this.db.createIndex({
            index: {
                fields: ['data.product', '_id']
            }
        });
    }

    databaseExist(db): Promise<boolean> {
        return PouchDB.allDbs().then(dbs => {
            return dbs.indexOf(db) != -1;
        });
    }

    enableSyncing() {
        let options = {
            Auth: {
                username: 'admin',
                password: 'nog%gabby'
            },
            live: true,
            retry: true,
            continuous: true
        };

        this.remote = 'http://157.230.209.193:5984/ogpooc';
        if (this.remote != undefined) {
            this.db.sync(this.remote, options).on('change', function (change) {
                console.log('changed');
            }).on('complete', function (complete) {
                console.log('complete');
            }).on('error', function (err) {
                console.log('offline');
            });
        }
    }

    loadRemoteDb(): Promise<boolean> {
        let options = {
            Auth: {
                username: 'admin',
                password: 'nog%gabby'
            }
        };
        this.remote = 'http://157.230.209.193:5984/ogpooc';
        return this.db.sync(this.remote, options).on('change', function (change) {

            //return true;
        }).on('complete', function (complete) {
            return true;
        }).on('error', function (err) {
            console.log('offline');
        });
    }

    validateUsername(username) {
        return this.http.get('http://157.230.209.193/couchdblogin/' + 'auth/validate-username/' + username).map(res => res.json());
    }

    /***********
    * STAFF NOT SUPERVISOR
    **********/
    /**
     * Save a supervisor
     * @param {supervisor} Supervisor
     *
     * @return Promise<Supervisor>
     */
    saveSupervisor(supervisor: Supervisor): Promise<Supervisor> {
        supervisor.id = Math.floor(Date.now()).toString();
        /* supervisor.post = 'Supervisor' */
        console.log(supervisor);
        return this.db.rel.save('supervisor', supervisor).then((data: any) => {
            if (data && data.supervisors && data.supervisors[0]) {
                console.log(data.supervisors[0]);
                return data.supervisors[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Get All Supervisors
    getSupervisors(): Promise<Array<Supervisor>> {
        return this.db.rel.find('supervisor').then((data: any) => {
            let supervisors = data.supervisors ? data.supervisors : [];
            let sortBy = 'DESC';

            switch (sortBy) {
                case 'ASC':
                    supervisors.sort((a: any, b: any) => {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    })
                    break;
                case 'DESC':
                    supervisors.sort((a: any, b: any) => {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }

            return supervisors;
        }).catch((err: any) => {
            console.log(err);
        });
    }

    getSupervisor(id): Promise<Supervisor>{
        return this.db.rel.find('supervisor', id).then((data: any) => {
            return data && data.supervisors ? data.supervisors[0] : null
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Update Supervisor
    updateSupervisor(supervisor: Supervisor): Promise<Supervisor>{
        return this.db.rel.save('supervisor', supervisor).then((data: any) => {
            if (data && data.supervisors && data.supervisors[0]) {
                return data.supervisors[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    deleteSupervisor(supervisor: Supervisor): Promise<boolean>{
    return this.db.rel.del('supervisor', supervisor).then((data: any) => {
        return data && data.deleted ? data.deleted : false
    }).catch((err: any) => {
        console.log(err)
    })
    }

    /***********
    * WORKPERMIT
    **********/
    /**
     * Save a workpermit
     * @param {workpermit} Workpermit
     *
     * @return Promise<Workpermit>
     */
    saveWorkpermit(workpermit: Workpermit): Promise<Workpermit> {
        workpermit.id = Math.floor(Date.now()).toString();
        
        return this.db.rel.save('workpermit', workpermit).then((data: any) => {
            if (data && data.workpermits && data.workpermits[0]) {
                console.log(data.workpermits[0]);
                return data.workpermits[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Get All Workpermits
    getWorkpermits(): Promise<Array<Workpermit>> {
        return this.db.rel.find('workpermit').then((data: any) => {
            let workpermits = data.workpermits ? data.workpermits : [];
            let sortBy = 'DESC';

            switch (sortBy) {
                case 'ASC':
                workpermits.sort((a: any, b: any) => {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    })
                    break;
                case 'DESC':
                workpermits.sort((a: any, b: any) => {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }

            return workpermits;
        }).catch((err: any) => {
            console.log(err);
        });
    }

    getWorkpermit(id): Promise<Workpermit>{
        return this.db.rel.find('workpermit', id).then((data: any) => {
            return data && data.workpermits ? data.workpermits[0] : null
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Update Workpermit
    updateWorkpermit(workpermit: Workpermit): Promise<Workpermit>{
        return this.db.rel.save('workpermit', workpermit).then((data: any) => {
            if (data && data.workpermits && data.workpermits[0]) {
                return data.workpermits[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    deleteWorkpermit(workpermit: Workpermit): Promise<boolean>{
    return this.db.rel.del('workpermit', workpermit).then((data: any) => {
        return data && data.deleted ? data.deleted : false
    }).catch((err: any) => {
        console.log(err)
    })
    }

     /***********
    * WORKORDER
    **********/
    /**
     * Save a workorder
     * @param {workorder} Workorder
     *
     * @return Promise<Workorder>
     */
    saveWorkorder(workorder: Workorder): Promise<Workorder> {
        workorder.id = Math.floor(Date.now()).toString();
        
        return this.db.rel.save('workorder', workorder).then((data: any) => {
            if (data && data.workorders && data.workorders[0]) {
                console.log(data.workorders[0]);
                return data.workorders[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Get All Workorders
    getWorkorders(): Promise<Array<Workorder>> {
        return this.db.rel.find('workorder').then((data: any) => {
            let workorders = data.workorders ? data.workorders : [];
            let sortBy = 'DESC';

            switch (sortBy) {
                case 'ASC':
                workorders.sort((a: any, b: any) => {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    })
                    break;
                case 'DESC':
                workorders.sort((a: any, b: any) => {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }

            return workorders;
        }).catch((err: any) => {
            console.log(err);
        });
    }

    getWorkorder(id): Promise<Workorder>{
        return this.db.rel.find('workorder', id).then((data: any) => {
            return data && data.workorders ? data.workorders[0] : null
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Update Workorder
    updateWorkorder(workorder: Workorder): Promise<Workorder>{
        return this.db.rel.save('workorder', workorder).then((data: any) => {
            if (data && data.workorders && data.workorders[0]) {
                return data.workorders[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    deleteWorkorder(workorder: Workorder): Promise<boolean>{
    return this.db.rel.del('workorder', workorder).then((data: any) => {
        return data && data.deleted ? data.deleted : false
    }).catch((err: any) => {
        console.log(err)
    })
    }


     /***********
    * EQUIPMENTCATEGORY
    **********/
    /**
     * Save a 
     * @param {equipmentcat} Equipmentcat
     *
     * @return Promise<Equipmentcat>
     */
    saveEquipmentcat(equipmentcat: Equipmentcat): Promise<Equipmentcat> {
        equipmentcat.id = Math.floor(Date.now()).toString();
        
        return this.db.rel.save('equipmentcat', equipmentcat).then((data: any) => {
            if (data && data.equipmentcats && data.equipmentcats[0]) {
                console.log(data.equipmentcats[0]);
                return data.equipmentcats[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Get All Equipmentcats
    getEquipmentcats(): Promise<Array<Equipmentcat>> {
        return this.db.rel.find('equipmentcat').then((data: any) => {
            let equipmentcats = data.equipmentcats ? data.equipmentcats : [];
            let sortBy = 'DESC';

            switch (sortBy) {
                case 'ASC':
                equipmentcats.sort((a: any, b: any) => {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    })
                    break;
                case 'DESC':
                equipmentcats.sort((a: any, b: any) => {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }

            return equipmentcats;
        }).catch((err: any) => {
            console.log(err);
        });
    }

    getEquipmentcat(id): Promise<Equipmentcat>{
        return this.db.rel.find('equipmentcat', id).then((data: any) => {
            return data && data.equipmentcats ? data.equipmentcats[0] : null
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Update Equipmentcat
    updateEquipmentcat(equipmentcat: Equipmentcat): Promise<Equipmentcat>{
        return this.db.rel.save('equipmentcat', equipmentcat).then((data: any) => {
            if (data && data.equipmentcats && data.equipmentcats[0]) {
                return data.equipmentcats[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    deleteEquipmentcat(equipmentcat: Equipmentcat): Promise<boolean>{
    return this.db.rel.del('equipmentcat', equipmentcat).then((data: any) => {
        return data && data.deleted ? data.deleted : false
    }).catch((err: any) => {
        console.log(err)
    })
    }

     /***********
    * EQUIPMENTPART
    **********/
    /**
     * Save a 
     * @param {equipmentpart} Equipmentpart
     *
     * @return Promise<equipmentpart>
     */
    saveEquipmentpart(equipmentpart: Equipmentpart): Promise<Equipmentpart> {
        equipmentpart.id = Math.floor(Date.now()).toString();
        
        return this.db.rel.save('equipmentpart', equipmentpart).then((data: any) => {
            if (data && data.equipmentparts && data.equipmentparts[0]) {
                console.log(data.equipmentparts[0]);
                return data.equipmentparts[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Get All equipmentparts
    getEquipmentparts(): Promise<Array<Equipmentpart>> {
        return this.db.rel.find('equipmentpart').then((data: any) => {
            let equipmentparts = data.equipmentparts ? data.equipmentparts : [];
            let sortBy = 'DESC';

            switch (sortBy) {
                case 'ASC':
                equipmentparts.sort((a: any, b: any) => {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    })
                    break;
                case 'DESC':
                equipmentparts.sort((a: any, b: any) => {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }

            return equipmentparts;
        }).catch((err: any) => {
            console.log(err);
        });
    }

    getEquipmentpart(id): Promise<Equipmentpart>{
        return this.db.rel.find('equipmentpart', id).then((data: any) => {
            return data && data.equipmentparts ? data.equipmentparts[0] : null
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Update equipmentpart
    updateEquipmentpart(equipmentpart: Equipmentpart): Promise<Equipmentpart>{
        return this.db.rel.save('equipmentpart', equipmentpart).then((data: any) => {
            if (data && data.equipmentparts && data.equipmentparts[0]) {
                return data.equipmentparts[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    deleteEquipmentpart(equipmentpart: Equipmentpart): Promise<boolean>{
    return this.db.rel.del('equipmentpart', equipmentpart).then((data: any) => {
        return data && data.deleted ? data.deleted : false
    }).catch((err: any) => {
        console.log(err)
    })
    }


     /***********
    * EQUIPMENTADD
    **********/
    /**
     * Save a 
     * @param {equipmentsadd} Equipmentsadd
     *
     * @return Promise<equipmentsadd>
     */
    saveEquipmentsadd(equipmenttag: Equipmentsadd): Promise<Equipmentsadd> {
        equipmenttag.id = Math.floor(Date.now()).toString();
        
        return this.db.rel.save('equipmenttag', equipmenttag).then((data: any) => {
            if (data && data.equipmenttags && data.equipmenttags[0]) {
                console.log(data.equipmenttags[0]);
                return data.equipmenttags[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Get All equipmentsadds
    getEquipmentsadds(): Promise<Array<Equipmentsadd>> {
        return this.db.rel.find('equipmenttag').then((data: any) => {
            let equipmenttags = data.equipmenttags ? data.equipmenttags : [];
            let sortBy = 'DESC';

            switch (sortBy) {
                case 'ASC':
                equipmenttags.sort((a: any, b: any) => {
                        return (a.id > b.id) ? 1 : ((a.id > b.id) ? -1 : 0);
                    })
                    break;
                case 'DESC':
                equipmenttags.sort((a: any, b: any) => {
                        return (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
                    });
                    break;
                default:
                    break;
            }

            return equipmenttags;
        }).catch((err: any) => {
            console.log(err);
        });
    }

    getEquipmentsadd(id): Promise<Equipmentsadd>{
        return this.db.rel.find('equipmenttag', id).then((data: any) => {
            return data && data.equipmenttags ? data.equipmenttags[0] : null
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Update equipmentsadd
    updateEquipmentsadd(equipmenttag: Equipmentsadd): Promise<Equipmentsadd>{
        return this.db.rel.save('equipmenttag', equipmenttag).then((data: any) => {
            if (data && data.equipmenttags && data.equipmenttags[0]) {
                return data.equipmenttags[0];
            }
            return null;
        }).catch((err: any) => {
            console.log(err);
        })
    }

    deleteEquipmentsadd(equipmenttag: Equipmentsadd): Promise<boolean>{
    return this.db.rel.del('equipmenttag', equipmenttag).then((data: any) => {
        return data && data.deleted ? data.deleted : false
    }).catch((err: any) => {
        console.log(err)
    })
    }
}
