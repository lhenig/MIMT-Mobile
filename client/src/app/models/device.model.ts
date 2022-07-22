export class Device {

    //SUBJECT TO CHANGE
    id: number;
    deviceName: string;
    phoneNumber: string;
    planId: number;

    constructor(
        id: number,
        deviceName: string,
        phoneNumber: string,
        planId: number
        ) {
            this.id = id;
            this.deviceName = deviceName;
            this.phoneNumber = phoneNumber;
            this.planId = planId;
        }
}
