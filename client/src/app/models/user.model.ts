import { Device } from "./device.model";

export class User {

    //SUBJECT TO CHANGE
    id: number;
    userName: string;
    email: string;
    devices: Array<Device>;
    monthlyBill: number;

    constructor(
        id: number,
        userName: string,
        email: string,
        devices: Array<Device>,
        monthlyBill: number
        ) {
            this.id = id;
            this.userName = userName;
            this.email = email;
            this.devices = devices;
            this.monthlyBill = monthlyBill;
        }
}
