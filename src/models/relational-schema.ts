/**
 * Schema defining the db relations
 */
export const Schema = [
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
];
