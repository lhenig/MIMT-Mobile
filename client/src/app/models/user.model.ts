export class User {

    //SUBJECT TO CHANGE
    name: string;
    email: string;
    password: string;
    plans: Array<string>;
    devices: Array<string>;

    constructor(
        name: string,
        email: string,
        password: string,
        plans: Array<string>,
        devices: Array<string>) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.plans = plans;
            this.devices = devices;
        }
}
