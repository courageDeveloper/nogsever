
var express = require('express');
var router = express.Router();
var app = express();
const nodemailer = require("nodemailer");
var mailer = require('express-mailer');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(cors());
var PouchDB = require("pouchdb");
PouchDB.plugin(require('relational-pouch'));
var filterManager;
var filterHse;
const request = require('request');
var filterAreaSupervisor;
var filterOperator;
var schedule = require('node-schedule');
var supervisorArray;
var database = new PouchDB("http://157.230.209.193:5984/ogpooc");


database.setSchema([
    {
        singular: 'supervisor',
        plural: 'supervisors',
        relations: {
            workpermits: {
                hasMany: {
                    type: 'workpermit',
                    options: {
                        async: true
                    }
                },
            },
            workorders: {
                hasMany: {
                    type: 'workorder',
                    options: {
                        async: true
                    }
                },
            },
            preventivemaintenances: {
                hasMany: {
                    type: 'preventivemaintenance',
                    options: {
                        async: true
                    }
                },
            },
            faultregistrys: {
                hasMany: {
                    type: 'faultregistry',
                    options: {
                        async: true
                    }
                },
            },
            dailyreports: {
                hasMany: {
                    type: 'dailyreport',
                    options: {
                        async: true
                    }
                },
            }
        }
    },
    {
        singular: 'workpermit',
        plural: 'workpermits',
        relations: {
            supervisor: {
                belongsTo: 'supervisor'
            },
        }
    },
    {
        singular: 'workorder',
        plural: 'workorders',
        relations: {
            supervisor: {
                belongsTo: 'supervisor'
            },
        }
    },
    {
        singular: 'preventivemaintenance',
        plural: 'preventivemaintenances',
        relations: {
            supervisor: {
                belongsTo: 'supervisor'
            },
        }
    },
    {
        singular: 'faultregistry',
        plural: 'faultregistrys',
        relations: {
            supervisor: {
                belongsTo: 'supervisor'
            },
        }
    },
    {
        singular: 'dailyreport',
        plural: 'dailyreports',
        relations: {
            supervisor: {
                belongsTo: 'supervisor'
            },
        }
    },
    {
        singular: 'material',
        plural: 'materials',
    },
    {
        singular: 'equipmentpart',
        plural: 'equipmentparts',
        relations: {
            equipmentcat: {
                belongsTo: 'equipmentcat'
            },
            equipmenttags: {
                hasMany: {
                    type: 'equipmenttag',
                    options: {
                        async: true
                    }
                },
            }
        }
    },
    {
        singular: 'equipmentcat',
        plural: 'equipmentcats',
        relations: {
            equipmentparts: {
                hasMany: {
                    type: 'equipmentpart',
                    options: {
                        async: true
                    }
                },
            }
        }
    },
    {
        singular: 'equipmenttag',
        plural: 'equipmenttags',
        relations: {
            equipmentpart: {
                belongsTo: 'equipmentpart'
            },
        }
    },
])

var port = process.env.PORT || 8080;
//Newest Update;

//FUNCTIONS
function workorderBeep() {
    /*  database.info().then(info => {
        console.log(info);
    }) */
    var j = schedule.scheduleJob('*/1 * * * *', function () {
        console.log('Ok');
        database.rel.find('workorder').then(results => {
            var result = results.workorders.filter(data => data.frequencyspandate != "");

            result.forEach(workorder => {
                var spanDate = new Date(workorder.frequencyspandate).toUTCString();
                spanDate = spanDate.split(' ').slice(0, 4).join(' ');
                var currentDate = new Date().toUTCString();
                currentDate = currentDate.split(' ').slice(0, 4).join(' ');


                if (spanDate == currentDate) {
                    workorder.beepstatus = true;
                    workorder.animateswitch = 'true';
                    workorder.status = false;
                    workorder.dstatus = false;
                    workorder.gstatus = false;
                    workorder.frequencydate = new Date();
                    var someDate = new Date();
                    var numberOfDaysToAdd = workorder.frequency;
                    var addedDate = someDate.getDate() + Number(numberOfDaysToAdd);
                    workorder.frequencyspandate = someDate.setDate(addedDate);


                    database.rel.save('workorder', workorder).then(data => {
                        //console.log(data);
                        if (data && data.workorders && data.workorders[0]) {
                            return data.workorders[0];
                        }

                        return null;
                    }).catch(err => {
                        console.log(err);
                    });

                    database.rel.find('supervisor').then(supervisors => {
                        filterManager = supervisors.supervisors.filter(data => data.post == 'Manager');
                        filterHse = supervisors.supervisors.filter(data => data.departments == 'HSE');
                        filterAreaSupervisor = supervisors.supervisors.filter(data => data.post == 'Supervisor' && data.departments == workorder.department);
                        if (workorder.responsibility == 'Operator') {
                            filterOperator = supervisors.supervisors.filter(data => data.post == 'Operator' && data.departments == workorder.department);
                        }
                        supervisorArray = [];
                        filterManager.forEach(item => {
                            supervisorArray.push(item.email);
                        });
                        filterHse.forEach(item => {
                            supervisorArray.push(item.email);
                        });
                        filterAreaSupervisor.forEach(item => {
                            supervisorArray.push(item.email);
                        });
                        if (workorder.responsibility == 'Operator') {
                            filterOperator.forEach(item => {
                                supervisorArray.push(item.email);
                            });
                        }

                        var emailInfo = {
                            name: workorder.staff,
                            department: workorder.department,
                            email: supervisorArray,
                            //phoneNumber: this.user.mobile,
                            position: workorder.post,
                            wono: workorder.workorderno,
                            description: workorder.description,
                            location: workorder.exactlocation,
                            facility: workorder.faculty,
                            priority: workorder.priority,
                            type: 'alarm',
                            jobtype: workorder.worktypes,
                            datecreated: workorder.datecreated,
                            frequencydate: workorder.frequencydate,
                            datewo: workorder.datewo,
                            responsibility: workorder.responsibility
                        }
                        let transporter = nodemailer.createTransport({
                            host: "smtp.gmail.com",
                            port: 465,
                            secure: true, // true for 465, false for other ports
                            auth: {
                                user: 'nogappmailer@gmail.com', // generated ethereal user
                                pass: 'nog%gabby' // generated ethereal password
                            },
                            tls: {
                                rejectUnauthorized: false
                            }
                        });

                        for (i = 0; i < emailInfo.email.length; i++) {
                            let mailOptions = {
                                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                                to: emailInfo.email[i], // list of receivers
                                subject: "Work Order For " + emailInfo.facility, // Subject line
                                text: "A " + emailInfo.jobtype + " created by " + emailInfo.name + " of " + emailInfo.department + " department " + " on " + emailInfo.datecreated + " for " + emailInfo.description + " at " + emailInfo.location + "/" + emailInfo.facility + " is due for Maintenance being " + emailInfo.frequencydate + emailInfo.datewo + " Work Order/Preventive Maintenance number is " + "00" + emailInfo.wono + " you can contact the " + emailInfo.responsibility + " who needs to carry out the work. " + " Priority is " + emailInfo.priority.toUpperCase() + " Please work should be carried out Immediately " + " Please Kindly Contact Person in Charge", // plain text body
                                //html: "<b>Hello world?</b>" // html body
                            };
                            // send mail with defined transport object
                            let info = transporter.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    return console.log(error);
                                }
                                console.log("Message sent: %s", info.messageId);
                                // Preview only available when sending through an Ethereal account
                                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                            })
                        }

                    })
                }

            });
        })
    });
}

function workorderBeepWo() {
    var j = schedule.scheduleJob('*/1 * * * *', function () {
        console.log('Ok');
        database.rel.find('workorder').then(results => {
            var result = results.workorders.filter(data => data.frequencyspandate == "");

            result.forEach(workorder => {
                request(`http://ip-api.com/json/${workorder.ipaddress}`, { json: true }, (err, res, body) => {
                    if (err) {
                        return console.log('REQUEST ERROR', err);
                    }

                    var woDate = new Date(workorder.datewo);
                    var dataBaseTime = woDate.toLocaleString("en-US", { timeZone: body.timezone });
                    var userTime = new Date().toLocaleString("en-US", { timeZone: body.timezone });
                    //woDate = woDate.split(' ').slice(0, 4).join(' ');
                    var currentDate = new Date(userTime);
                    //currentDate = currentDate.split(' ').slice(0, 4).join(' ');
                    woDate = new Date(dataBaseTime);
                    woDate = woDate.toUTCString().split(' ').slice(0, 4).join(' ');
                    currentDate = currentDate.toUTCString().split(' ').slice(0, 4).join(' ');
                   /*  console.log('WODATE', woDate);
                    console.log('CURRENTDATE', currentDate);
 */
                    if (woDate == currentDate) {
                        workorder.beepstatus = true;
                        workorder.animateswitch = 'true';
                        workorder.status = false;
                        workorder.dstatus = false;
                        workorder.gstatus = false;
                        workorder.datewo = '';
                        /*  var mypromise = new Promise(function (resolve, reject) {
             
                         }) */
                        database.rel.save('workorder', workorder).then(data => {
                            //console.log(data);
                            if (data && data.workorders && data.workorders[0]) {
                                return data.workorders[0];
                            }

                            return null;
                        }).catch(err => {
                            console.log(err);
                        });

                        database.rel.find('supervisor').then(supervisors => {
                            filterManager = supervisors.supervisors.filter(data => data.post == 'Manager');
                            filterHse = supervisors.supervisors.filter(data => data.departments == 'HSE');
                            filterAreaSupervisor = supervisors.supervisors.filter(data => data.post == 'Supervisor' && data.departments == workorder.department);
                            if (workorder.responsibility == 'Operator') {
                                filterOperator = supervisors.supervisors.filter(data => data.post == 'Operator' && data.departments == workorder.department);
                            }
                            supervisorArray = [];
                            filterManager.forEach(item => {
                                supervisorArray.push(item.email);
                            });
                            filterHse.forEach(item => {
                                supervisorArray.push(item.email);
                            });
                            filterAreaSupervisor.forEach(item => {
                                supervisorArray.push(item.email);
                            });
                            if (workorder.responsibility == 'Operator') {
                                filterOperator.forEach(item => {
                                    supervisorArray.push(item.email);
                                });
                            }

                            var emailInfo = {
                                name: workorder.staff,
                                department: workorder.department,
                                email: supervisorArray,
                                //phoneNumber: this.user.mobile,
                                position: workorder.post,
                                wono: workorder.workorderno,
                                description: workorder.description,
                                location: workorder.exactlocation,
                                facility: workorder.faculty,
                                priority: workorder.priority,
                                type: 'alarmwo',
                                jobtype: workorder.worktypes,
                                datecreated: workorder.datecreated,
                                frequencydate: workorder.frequencydate,
                                datewo: workorder.datewo,
                                responsibility: workorder.responsibility
                            }
                            let transporter = nodemailer.createTransport({
                                host: "smtp.gmail.com",
                                port: 465,
                                secure: true, // true for 465, false for other ports
                                auth: {
                                    user: 'nogappmailer@gmail.com', // generated ethereal user
                                    pass: 'nog%gabby' // generated ethereal password
                                },
                                tls: {
                                    rejectUnauthorized: false
                                }
                            });

                            for (i = 0; i < emailInfo.email.length; i++) {

                                let mailOptions = {
                                    from: '"NOG" <nogappmailer@gmail.com>', // sender address
                                    to: emailInfo.email[i], // list of receivers
                                    subject: "Work Order For " + emailInfo.facility, // Subject line
                                    text: "A " + emailInfo.jobtype + " created by " + emailInfo.name + " of " + emailInfo.department + " department " + " on " + emailInfo.datecreated + " for " + emailInfo.description + " at " + emailInfo.location + "/" + emailInfo.facility + " is due for Maintenance being " + emailInfo.frequencydate + emailInfo.datewo + " Work Order/Preventive Maintenance number is " + "00" + emailInfo.wono + " you can contact the " + emailInfo.responsibility + " who needs to carry out the work. " + " Priority is " + emailInfo.priority.toUpperCase() + " Please work should be carried out Immediately " + " Please Kindly Contact Person in Charge", // plain text body
                                    //html: "<b>Hello world?</b>" // html body
                                };
                                // send mail with defined transport object
                                let info = transporter.sendMail(mailOptions, (error, info) => {
                                    if (error) {
                                        return console.log(error);
                                    }
                                    console.log("Message sent: %s", info.messageId);
                                    // Preview only available when sending through an Ethereal account
                                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                                    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                                    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                                })
                            }

                        })
                    }
                });
            });
        })
    });
}

function preventivemaintenanceBeep() {
    /*  database.info().then(info => {
        console.log(info);
    }) */
    var j = schedule.scheduleJob('*/1 * * * *', function () {
        console.log('Ok');
        database.rel.find('preventivemaintenance').then(results => {
            var result = results.preventivemaintenances.filter(data => data.frequencyspandate != "");

            result.forEach(preventivemaintenance => {
                //spanDate = spanDate.split(' ').slice(0, 4).join(' ');

                request(`http://ip-api.com/json/${preventivemaintenance.ipaddress}`, { json: true }, (err, res, body) => {
                    if (err) {
                        return console.log('REQUEST ERROR', err);
                    }
                    var spanDate = new Date(preventivemaintenance.frequencyspandate);
                    var dataBaseTime = spanDate.toLocaleString("en-US", { timeZone: body.timezone });
                    var userTime = new Date().toLocaleString("en-US", { timeZone: body.timezone });
                    var currentDate = new Date(userTime);
                    spanDate = new Date(dataBaseTime);

                    spanDate.setSeconds(0, 0);
                    currentDate.setSeconds(0, 0);
                    //currentDate = currentDate.split(' ').slice(0, 4).join(' ');

                    if (spanDate.toUTCString() == currentDate.toUTCString()) {
                        preventivemaintenance.beepstatus = true;
                        preventivemaintenance.animateswitch = 'true';
                        preventivemaintenance.status = false;
                        preventivemaintenance.dstatus = false;
                        preventivemaintenance.gstatus = false;
                        preventivemaintenance.frequencydate = new Date();
                        var someDate = new Date();
                        var numberOfDaysToAdd = preventivemaintenance.frequency;
                        var addedDate = someDate.getHours() + Number(numberOfDaysToAdd);
                        preventivemaintenance.frequencyspandate = someDate.setHours(addedDate);


                        database.rel.save('preventivemaintenance', preventivemaintenance).then(data => {
                            //console.log(data);
                            if (data && data.preventivemaintenances && data.preventivemaintenances[0]) {
                                return data.preventivemaintenances[0];
                            }

                            return null;
                        }).catch(err => {
                            console.log(err);
                        });

                        database.rel.find('supervisor').then(supervisors => {
                            filterManager = supervisors.supervisors.filter(data => data.post == 'Manager');
                            filterHse = supervisors.supervisors.filter(data => data.departments == 'HSE');
                            filterAreaSupervisor = supervisors.supervisors.filter(data => data.post == 'Supervisor' && data.departments == preventivemaintenance.department);
                            if (preventivemaintenance.responsibility == 'Operator') {
                                filterOperator = supervisors.supervisors.filter(data => data.post == 'Operator' && data.departments == preventivemaintenance.department);
                            }
                            supervisorArray = [];
                            filterManager.forEach(item => {
                                supervisorArray.push(item.email);
                            });
                            filterHse.forEach(item => {
                                supervisorArray.push(item.email);
                            });
                            filterAreaSupervisor.forEach(item => {
                                supervisorArray.push(item.email);
                            });
                            if (preventivemaintenance.responsibility == 'Operator') {
                                filterOperator.forEach(item => {
                                    supervisorArray.push(item.email);
                                });
                            }

                            var emailInfo = {
                                name: preventivemaintenance.staff,
                                department: preventivemaintenance.department,
                                email: supervisorArray,
                                //phoneNumber: this.user.mobile,
                                position: preventivemaintenance.post,
                                pmno: preventivemaintenance.pmno,
                                description: preventivemaintenance.description,
                                location: preventivemaintenance.exactlocation,
                                facility: preventivemaintenance.faculty,
                                priority: preventivemaintenance.priority,
                                maintenanceitem: preventivemaintenance.maintenanceitem,
                                type: 'pmalarm',
                                jobtype: preventivemaintenance.worktypes,
                                datecreated: preventivemaintenance.datecreated,
                                frequencydate: preventivemaintenance.frequencydate,
                                datewo: preventivemaintenance.datewo,
                                responsibility: preventivemaintenance.responsibility
                            }
                            let transporter = nodemailer.createTransport({
                                host: "smtp.gmail.com",
                                port: 465,
                                secure: true, // true for 465, false for other ports
                                auth: {
                                    user: 'nogappmailer@gmail.com', // generated ethereal user
                                    pass: 'nog%gabby' // generated ethereal password
                                },
                                tls: {
                                    rejectUnauthorized: false
                                }
                            });

                            for (i = 0; i < emailInfo.email.length; i++) {
                                let mailOptions = {
                                    from: '"NOG" <nogappmailer@gmail.com>', // sender address
                                    to: emailInfo.email[i], // list of receivers
                                    subject: "Preventive Maintenance For " + emailInfo.facility, // Subject line
                                    text: "A Preventive Maintenance created by " + emailInfo.name + " of " + emailInfo.department + " department " + " on " + emailInfo.datecreated + " for " + emailInfo.maintenanceitem + " at " + emailInfo.location + "/" + emailInfo.facility + " is due for Maintenance being " + emailInfo.frequencydate + emailInfo.datewo + " Preventive Maintenance number is " + "00" + emailInfo.pmno + " you can contact the " + emailInfo.responsibility + " who needs to carry out the work. " + " Priority is " + emailInfo.priority.toUpperCase() + " Please work should be carried out Immediately " + " Please Kindly Contact Person in Charge", // plain text body
                                    //html: "<b>Hello world?</b>" // html body
                                };
                                // send mail with defined transport object
                                let info = transporter.sendMail(mailOptions, (error, info) => {
                                    if (error) {
                                        return console.log(error);
                                    }
                                    console.log("Message sent: %s", info.messageId);
                                    // Preview only available when sending through an Ethereal account
                                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                                    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                                    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                                })
                            }

                        })
                    }
                });

            });
        })
    });
}


//Static Folder
app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/www/index.html'));
})

app.get('/test', (req, res) => {
    console.log('get');
})

app.post('/mobilenotification', (req, res, next) => {

    var sendNotification = function (data) {
        var headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Basic NGY1ODc1ZDktNzI1NC00NDY3LWExZDgtN2QzZjQ4NWYzMzEy"
        };

        var options = {
            host: "onesignal.com",
            port: 443,
            path: "/api/v1/notifications",
            method: "POST",
            headers: headers
        };

        var https = require('https');
        var req = https.request(options, function (res) {
            res.on('data', function (data) {
                console.log("Response:");
                console.log(JSON.parse(data));
            });
        });

        req.on('error', function (e) {
            console.log("ERROR:");
            console.log(e);
        });

        req.write(JSON.stringify(data));
        req.end();
    };

    if (req.body.type == 'workpemit') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Workpermit has just been created" },
            included_segments: ["All"]
        };
    }
    else if (req.body.type == 'approve') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Workpermit has been approved" },
            included_segments: ["All"]
        };

    }
    else if (req.body.type == 'disapprove') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Workpermit has been disapproved" },
            included_segments: ["All"]
        };

    }
    else if (req.body.type == 'workorder') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Workorder has been created" },
            included_segments: ["All"]
        };

    }
    else if (req.body.type == 'preventivemaintenance') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Preventive Maintenance has been created" },
            included_segments: ["All"]
        };

    }
    else if (req.body.type == 'alarmwo') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Workorder is due for an equipment maintenance" },
            included_segments: ["All"]
        };

    }
    else if (req.body.type == 'pmalarm') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Preventive Maintenance is due for an equipment maintenance" },
            included_segments: ["All"]
        };

    }
    else if (req.body.type == 'alarm') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Workorder is due for an equipment maintenance" },
            included_segments: ["All"]
        };

    }
    else if (req.body.type == 'fixedworkpemit') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "An Equipment has just been fixed, check to confirm" },
            included_segments: ["All"]
        };
    }

    sendNotification(message);
})

app.post('/mobilefaultregistry', (req, res, next) => {

    var sendNotification = function (data) {
        var headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Basic NGY1ODc1ZDktNzI1NC00NDY3LWExZDgtN2QzZjQ4NWYzMzEy"
        };

        var options = {
            host: "onesignal.com",
            port: 443,
            path: "/api/v1/notifications",
            method: "POST",
            headers: headers
        };

        var https = require('https');
        var req = https.request(options, function (res) {
            res.on('data', function (data) {
                console.log("Response:");
                console.log(JSON.parse(data));
            });
        });

        req.on('error', function (e) {
            console.log("ERROR:");
            console.log(e);
        });

        req.write(JSON.stringify(data));
        req.end();
    };

    if (req.body.type == 'faultregistry') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Fault Registry has just been created" },
            included_segments: ["All"]
        };
    }
    else if (req.body.type == 'approve') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Fault Registry has been approved" },
            included_segments: ["All"]
        };

    }
    else if (req.body.type == 'disapprove') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Fault Registry has been disapproved" },
            included_segments: ["All"]
        };

    }
    else if (req.body.type == 'fixed') {
        var message = {
            app_id: "40a46202-dc72-4f76-bc8f-c692e075aec6",
            contents: { "en": "A Fault Registry has been fixed" },
            included_segments: ["All"]
        };

    }

    sendNotification(message);
})


app.post('/sendemail', (req, res, next) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'nogappmailer@gmail.com', // generated ethereal user
            pass: 'nog%gabby' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    if (req.body.type == 'workpemit') {

        for (i = 0; i < req.body.email.length; i++) {

            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Work Permit For " + req.body.facility, // Subject line
                text: "A Work Permit has been generated by " + req.body.name + " of " + req.body.department + " department " + " for " + req.body.description + " at " + req.body.location + "/" + req.body.facility + " workpermit number is " + req.body.ptwno + " you can contact the operator on " + req.body.phoneNumber, // plain text body
                attachments: [{
                    path: req.body.picture
                }]
                //html: "<b>Hello world?</b>" // html body
            };
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }

    else if (req.body.type == 'approve') {
        let mailOptions = {
            from: '"NOG" <nogappmailer@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: "Work Permit For " + req.body.facility + " has been approved ", // Subject line
            text: "Your Work Permit of number " + req.body.ptwno + " has been approved by " + req.body.name + " of " + req.body.department + " department " + " for " + req.body.description + " at " + req.body.location + "/" + req.body.facility + " you can contact the approver on " + req.body.phoneNumber, // plain text body
            //html: "<b>Hello world?</b>" // html body
        };

        // send mail with defined transport object
        let info = transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        })
    }

    else if (req.body.type == 'disapprove') {
        let mailOptions = {
            from: '"NOG" <nogappmailer@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: "Work Permit For " + req.body.facility + " has been disapproved ", // Subject line
            text: "Your Work Permit of number " + req.body.ptwno + " has been disapproved by " + req.body.name + " of " + req.body.department + " department " + " for " + req.body.description + " at " + req.body.location + "/" + req.body.facility + " you can contact the disapprover on " + req.body.phoneNumber, // plain text body
            //html: "<b>Hello world?</b>" // html body
        };

        // send mail with defined transport object
        let info = transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        })
    }



})

//fixedEquipment
app.post('/sendemailfixed', (req, res, next) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'nogappmailer@gmail.com', // generated ethereal user
            pass: 'nog%gabby' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    if (req.body.type == 'fixedworkpemit') {

        for (i = 0; i < req.body.email.length; i++) {

            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Work Permit Equipment fixed for " + req.body.facility, // Subject line
                text: "A Work Permit generated by " + req.body.name + " of " + req.body.department + " department " + " for " + req.body.description + " at " + req.body.location + "/" + req.body.facility + " workpermit number is " + req.body.ptwno + "has been fixed. Check the Attached picture for the fixed equipment. You can contact the operator on " + req.body.phoneNumber, // plain text body
                attachments: [{
                    path: req.body.picture
                }]
                //html: "<b>Hello world?</b>" // html body
            };
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }
})


//Email Workorder
app.post('/sendemailworkorder', (req, res, next) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'nogappmailer@gmail.com', // generated ethereal user
            pass: 'nog%gabby' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    if (req.body.type == 'workorder' && req.body.responsibility == 'Operator') {
        for (i = 0; i < req.body.email.length; i++) {

            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Work Order For " + req.body.facility, // Subject line
                text: "A " + req.body.jobtype + " has been created by " + req.body.name + " of " + req.body.department + " department " + " on " + req.body.datecreated + " for " + req.body.description + " at " + req.body.location + "/" + req.body.facility + " to be executed " + req.body.frequencydate + req.body.datewo + " Work Order/Preventive Maintenance number is " + "00" + req.body.wono + " you can contact the " + req.body.position + " who created it on " + req.body.phoneNumber + " it is to be handled by Operators of " + req.body.department + " department", // plain text body
                //html: "<b>Hello world?</b>" // html body
            };
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }

    else if (req.body.type == 'workorder' && req.body.responsibility == 'Vendor') {
        for (i = 0; i < req.body.email.length; i++) {

            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Work Order For " + req.body.facility, // Subject line
                text: "A " + req.body.jobtype + " has been created by " + req.body.name + " of " + req.body.department + " department " + " on " + req.body.datecreated + " for " + req.body.description + " at " + req.body.location + "/" + req.body.facility + " to be executed " + req.body.frequencydate + req.body.datewo + " Work Order/Preventive Maintenance number is " + "00" + req.body.wono + " you can contact the " + req.body.position + " who created it on " + req.body.phoneNumber + " it is to be handled by Vendors of the equipment " + " Please Kindly Contact Vendor in Charge", // plain text body
                //html: "<b>Hello world?</b>" // html body
            };
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }

    else if (req.body.type == 'workorder' && req.body.responsibility == 'Contractor') {
        for (i = 0; i < req.body.email.length; i++) {

            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Work Order For " + req.body.facility, // Subject line
                text: "A " + req.body.jobtype + " has been created by " + req.body.name + " of " + req.body.department + " department " + " on " + req.body.datecreated + " for " + req.body.description + " at " + req.body.location + "/" + req.body.facility + " to be executed " + req.body.frequencydate + req.body.datewo + " Work Order/Preventive Maintenance number is " + "00" + req.body.wono + " you can contact the " + req.body.position + " who created it on " + req.body.phoneNumber + " it is to be handled by the Contractors responsible for the equipment " + " Please Kindly Contact Contarctor in Charge", // plain text body
                //html: "<b>Hello world?</b>" // html body
            };
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }
    else if (req.body.type == 'preventivemaintenance' && req.body.responsibility == 'Operator') {
        for (i = 0; i < req.body.email.length; i++) {

            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Preventive Maintenance For " + req.body.facility, // Subject line
                text: "A Preventive Maintenance has been created by " + req.body.name + " of " + req.body.department + " department " + " on " + req.body.datecreated + " for " + req.body.maintenanceitem + " at " + req.body.location + "/" + req.body.facility + " to be executed " + req.body.frequencydate + ". Preventive Maintenance number is " + "00" + req.body.pmno + " you can contact the " + req.body.position + " who created it on " + req.body.phoneNumber + " it is to be handled by Operators of " + req.body.department + " department", // plain text body
                //html: "<b>Hello world?</b>" // html body
            };
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }
    else if (req.body.type == 'alarm') {
        for (i = 0; i < req.body.email.length; i++) {
            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Work Order For " + req.body.facility, // Subject line
                text: "A " + req.body.jobtype + " created by " + req.body.name + " of " + req.body.department + " department " + " on " + req.body.datecreated + " for " + req.body.description + " at " + req.body.location + "/" + req.body.facility + " is due for Maintenance being " + req.body.frequencydate + req.body.datewo + " Work Order/Preventive Maintenance number is " + "00" + req.body.wono + " you can contact the " + req.body.responsibility + " who needs to carry out the work. " + " Priority is " + req.body.priority.toUpperCase() + " Please work should be carried out Immediately " + " Please Kindly Contact Person in Charge", // plain text body
                //html: "<b>Hello world?</b>" // html body
            };
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }
    else if (req.body.type == 'pmalarm') {
        for (i = 0; i < req.body.email.length; i++) {
            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Preventive Maintenance For " + req.body.facility, // Subject line
                text: "A Preventive Maintenance created by " + req.body.name + " of " + req.body.department + " department " + " on " + req.body.datecreated + " for " + req.body.maintenanceitem + " at " + req.body.location + "/" + req.body.facility + " is due for Maintenance being " + req.body.frequencydate + " Preventive Maintenance number is " + "00" + req.body.pmno + " you can contact the " + req.body.responsibility + " who needs to carry out the work. " + " Priority is " + req.body.priority.toUpperCase() + " Please work should be carried out Immediately " + " Please Kindly Contact Person in Charge", // plain text body
                //html: "<b>Hello world?</b>" // html body
            };
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }
    else if (req.body.type == 'alarmwo') {

        for (i = 0; i < req.body.email.length; i++) {

            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Work Order For " + req.body.facility, // Subject line
                text: "A " + req.body.jobtype + " created by " + req.body.name + " of " + req.body.department + " department " + " on " + req.body.datecreated + " for " + req.body.description + " at " + req.body.location + "/" + req.body.facility + " is due for Maintenance being " + req.body.frequencydate + req.body.datewo + " Work Order/Preventive Maintenance number is " + "00" + req.body.wono + " you can contact the " + req.body.responsibility + " who needs to carry out the work. " + " Priority is " + req.body.priority.toUpperCase() + " Please work should be carried out Immediately " + " Please Kindly Contact Person in Charge", // plain text body
                //html: "<b>Hello world?</b>" // html body
            };
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }

})

//Email Fault Registry
app.post('/sendemailfaultregistry', (req, res, next) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'nogappmailer@gmail.com', // generated ethereal user
            pass: 'nog%gabby' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    if (req.body.type == 'faultregistry') {

        for (i = 0; i < req.body.email.length; i++) {

            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Fault Registry For Equipment" + req.body.equipmentcatname + " " + req.body.equipmentpartname, // Subject line
                text: "A Fault Registry has been generated by " + req.body.name + " of " + req.body.department + " department " + " for " + req.body.equipmentcatname + " with tag " + req.body.equipmenttag + " " + req.body.equipmentpartname + " with tag " + req.body.tagname + " at " + req.body.location + "/" + req.body.facility + " Fault Registry number is " + "00" + req.body.faultid + " you can contact the issuer of the fault registry on " + req.body.phoneNumber, // plain text body
                //html: "<b>Hello world?</b>" // html body
            };
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }

    else if (req.body.type == 'fixed') {
        for (i = 0; i < req.body.email.length; i++) {

            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Fault Registry For Equipment " + req.body.equipmentcatname + " " + req.body.equipmentpartname + " has been Fixed ", // Subject line
                text: "Fault Registry of " + req.body.faultid + " has been fixed by " + req.body.name + " of " + req.body.department + " department " + " for " + req.body.equipmentcatname + " with tag " + req.body.equipmenttag + " " + req.body.equipmentpartname + " with tag " + req.body.tagname + " at " + req.body.location + "/" + req.body.facility + " you can contact the Operator on " + req.body.phoneNumber, // plain text body
                attachments: [{
                    path: req.body.picture
                }],
                //html: "<b>Hello world?</b>" // html body
            };

            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }

    else if (req.body.type == 'disapprove') {
        for (i = 0; i < req.body.email.length; i++) {

            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Fault Registry For Equipment " + req.body.equipmentcatname + " " + req.body.equipmentpartname + " has been Disapproved ", // Subject line
                text: "Fault Registry of " + req.body.faultid + " has been disapproved by " + req.body.name + " of " + req.body.department + " department " + " for " + req.body.equipmentcatname + " with tag " + req.body.equipmenttag + " " + req.body.equipmentpartname + " with tag " + req.body.tagname + " at " + req.body.location + "/" + req.body.facility + " you can contact the Supervisor or Manager on " + req.body.phoneNumber, // plain text body
                //html: "<b>Hello world?</b>" // html body
            };

            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }

    else if (req.body.type == 'approve') {
        for (i = 0; i < req.body.email.length; i++) {

            let mailOptions = {
                from: '"NOG" <nogappmailer@gmail.com>', // sender address
                to: req.body.email[i], // list of receivers
                subject: "Fault Registry For Equipment " + req.body.equipmentcatname + " " + req.body.equipmentpartname + " has been Approved ", // Subject line
                text: "Fault Registry of " + req.body.faultid + " has been approved by " + req.body.name + " of " + req.body.department + " department " + " for " + req.body.equipmentcatname + " with tag " + req.body.equipmenttag + " " + req.body.equipmentpartname + " with tag " + req.body.tagname + " at " + req.body.location + "/" + req.body.facility + " you can contact the Supervisor or Manager on " + req.body.phoneNumber, // plain text body
                //html: "<b>Hello world?</b>" // html body
            };

            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            })
        }
    }

})

app.post('/forgotpassword', (req, res, next) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'nogappmailer@gmail.com', // generated ethereal user
            pass: 'nog%gabby' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"NOG" <nogappmailer@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "PASSWORD RESET REQUEST ", // Subject line
        text: "A Password Reset has been requested by you, enter this otp code " + req.body.otp + " to be able to change your password ",
        //html: "<b>Hello world?</b>" // html body
    };
    // send mail with defined transport object
    let info = transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    })

})


app.listen(port, () => {
    workorderBeep();
    workorderBeepWo();
    preventivemaintenanceBeep();
});
console.log("Server started at port " + port);
