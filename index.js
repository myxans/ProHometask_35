class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};

class Car {
  constructor(brand, model, year, licensePlate, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log("The owner must be over 18 years old!");
    }
  }

  printInfo() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, License Plate: ${this.licensePlate}`
    );
    console.log("Owner Information:");
    this.owner.printInfo();
  }
};

let human1 = new Human("John Doe", 25);
let human2 = new Human("Jane Smith", 32);
let human3 = new Human("Bob Johnson", 19);

let car1 = new Car("Honda", "Civic", 2015, "ABC123", human1);
let car2 = new Car("Toyota", "Corolla", 2018, "DEF456", human2);
let car3 = new Car("Ford", "Mustang", 2020, "GHI789", human3);

car1.printInfo();
car2.printInfo();
car3.printInfo();