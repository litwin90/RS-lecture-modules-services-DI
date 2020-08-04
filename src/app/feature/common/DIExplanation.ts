class A {}

class B {}

class C {
    instanceOfA: A;
    instanceOfB: B;

    constructor(instanceOfA: A, instanceOfB: B) {
        this.instanceOfA = instanceOfA;
        this.instanceOfB = instanceOfB;
    }
}

class D {
    instanceOfC: C;

    constructor(instanceOfC: C) {
        this.instanceOfC = instanceOfC;
    }
}

const instanceOfD = new D(new C(new A(), new B()));
