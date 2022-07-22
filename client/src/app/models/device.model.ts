export class Device {

    //SUBJECT TO CHANGE
    id: number;
    deviceName: string;
    planName: string;

    constructor(
        id: number,
        deviceName: string,
        planName: string
        ) {
            this.id = id;
            this.deviceName = deviceName;
            this.planName = planName;
        }
}
