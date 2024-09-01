class Animal {
    constructor() {
        this.name = "Omnivore";
    }
    Describe() {
        return `This is an ${this.name}.`; 
    }
}

class Dog extends Animal {
    constructor() {
        super(); 
        this.age = 14;
    }
    Data() {
        return this.age; 
    }
}

const someAnimal = new Dog();
console.log(someAnimal.Describe()); 
console.log(someAnimal.Data()); 
