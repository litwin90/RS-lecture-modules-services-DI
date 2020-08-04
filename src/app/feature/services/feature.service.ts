import { Injectable } from '@angular/core';

let serviceInstancesCont = 0;

@Injectable()
export class FeatureService {
    serviceId: number;

    constructor() {
        serviceInstancesCont++;
        this.serviceId = serviceInstancesCont;
    }

    logToConsole(message: string) {
        console.log(message);
    }

    logServiceId() {
        console.log(`Feature service id: ${this.serviceId}`);
    }
}
