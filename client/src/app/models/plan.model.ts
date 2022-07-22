export class Plan {

    //SUBJECT TO CHANGE
    id: number;
    planName: string;
    deviceLimit: number;

    constructor(
        id: number,
        planName: string,
        deviceLimit: number
        ) {
            this.id = id;
            this.planName = planName;
            this.deviceLimit = deviceLimit;
        }
}
