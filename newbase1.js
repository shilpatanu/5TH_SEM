class Vehicle {
    constructor() {
        this.color = 'red';
        this.wheels = 4;
    }

    printWheels() {
        console.log(this.wheels);
    }
}

class Car extends Vehicle {
    constructor() {
        super(); 
    }

    printColor() {
        console.log(this.color);
    }
}

const vehicle = new Car();
vehicle.printWheels(); 
vehicle.printColor(); 
