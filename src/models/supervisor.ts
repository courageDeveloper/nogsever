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
    workpermits: Array<string>,
    workorders: Array<string>
}
