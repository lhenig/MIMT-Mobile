export class Plan {

    //SUBJECT TO CHANGE
    id: number;
    name: string;
    planName: string;
    deviceLimit: number;
    price: number;
    userId: number;

    constructor(
        id: number,
        name: string,
        planName: string,
        deviceLimit: number,
        price: number,
        userId: number
        ) {
            this.id = id;
            this.name = name;
            this.planName = planName;
            this.deviceLimit = deviceLimit;
            this.price = price;
            this.userId = userId;
        }
}
