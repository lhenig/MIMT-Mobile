import { Device } from "./device.model";
import { Plan } from "./plan.model";

export class User {

    //SUBJECT TO CHANGE
    id: number;
    userName: string;
    email: string;
    plans: Array<Plan>;
    devices: Array<Device>;

    constructor(
        id: number,
        userName: string,
        email: string,
        plans: Array<Plan>,
        devices: Array<Device>
        ) {
            this.id = id;
            this.userName = userName;
            this.email = email;
            this.plans = plans;
            this.devices = devices
        }
}
