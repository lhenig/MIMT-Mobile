export class Device {

    //SUBJECT TO CHANGE
    id: number;
    deviceName: string;
    userId: number;
    planId: number;

    constructor(
        id: number,
        deviceName: string,
        userId: number,
        planId: number
        ) {
            this.id = id;
            this.deviceName = deviceName;
            this.userId = userId;
            this.planId = planId;
        }
}
