export class Plan {

    //SUBJECT TO CHANGE
    id: number;
    planName: string;
    deviceLimit: number;
    price: number;
    userId: number;

    constructor(
        id: number,
        planName: string,
        deviceLimit: number,
        price: number,
        userId: number
        ) {
            this.id = id;
            this.planName = planName;
            this.deviceLimit = deviceLimit;
            this.price = price;
            this.userId = userId;
        }
}
