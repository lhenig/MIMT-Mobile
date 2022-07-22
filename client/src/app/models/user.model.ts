import { Device } from "./device.model";

export class User {

    //SUBJECT TO CHANGE
    id: number;
    userName: string;
    email: string;
    devices: Array<Device>;

    constructor(
        id: number,
        userName: string,
        email: string,
        devices: Array<Device>
        ) {
            this.id = id;
            this.userName = userName;
            this.email = email;
            this.devices = devices;
        }
}
