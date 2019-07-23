//STAFF NOT SUPERVISOR
export interface Supervisor {
    id?: string,
    rev?: string,
    name: string,
    mobile: any,
    address: string,
    email: string,
    sex: string,
    position: string,
    departments: string,
    username: string,
    password: string,
    post: string,
    otp: string,
    workpermits: Array<string>,
    workorders: Array<string>,
    woalert: Array<any>,
    faultregistrys: Array<string>,
    dailyreports: Array<string>
}
