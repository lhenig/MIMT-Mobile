export class User {

    //SUBJECT TO CHANGE
    id: number;
    userName: string;
    email: string;
    plans: Array<string>;
    devices: Array<string>;

    constructor(
        id: number,
        userName: string,
        email: string,
        plans: Array<string>,
        devices: Array<string>) {
            this.id = id;
            this.userName = userName;
            this.email = email;
            this.plans = plans;
            this.devices = devices;
        }
}
