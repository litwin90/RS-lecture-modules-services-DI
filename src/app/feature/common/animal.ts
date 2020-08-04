export class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    logName() {
        console.log(this.name);
    }
}

export const dog = new Animal('Dog');
