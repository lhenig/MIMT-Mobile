export class Device {

    //SUBJECT TO CHANGE
    id!: number;
    deviceName: string;
    phoneNumber: string;
    planId: number;

    constructor(
        deviceName: string,
        phoneNumber: string,
        planId: number
        ) {
            this.deviceName = deviceName;
            this.phoneNumber = phoneNumber;
            this.planId = planId;
        }
}
