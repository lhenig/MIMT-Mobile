export class User {

    //SUBJECT TO CHANGE
    id: number;
    name: string;
    email: string;
    plans: Array<string>;
    devices: Array<string>;

    constructor(
        id: number,
        name: string,
        email: string,
        plans: Array<string>,
        devices: Array<string>) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.plans = plans;
            this.devices = devices;
        }
}
