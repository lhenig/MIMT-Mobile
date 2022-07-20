export class Plan {

    //SUBJECT TO CHANGE
    id: number;
    name: string;
    planName: string;
    deviceLimit: number;

    constructor(
        id: number,
        name: string,
        planName: string,
        deviceLimit: number
        ) {
            this.id = id;
            this.name = name;
            this.planName = planName;
            this.deviceLimit = deviceLimit;
        }
}
