import { Device } from "./device.model";
import { Plan } from "./plan.model";

export class User {

    //SUBJECT TO CHANGE
    id!: number;
    userName: string;
    email: string;
    password: string;
    // plans: Array<Plan>;
    // devices: Array<Device>;

    constructor(
        userName: string,
        email: string,
        password: string,
        // plans: Array<Plan>,
        // devices: Array<Device>
        ) {
            this.userName = userName;
            this.email = email;
            this.password = password;
            // this.plans = plans;
            // this.devices = devices
        }
        
}
