// Створюємо сутність людина
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
    console.log (`Ім'я: ${this.name}, Вік: ${this.age}`)
}
};

// Створюємо сутність автомобіль
class Car {
    constructor (brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }

    assignOwner(owner) {
        if (owner instanceof Person && owner.age > 18) {
            this.owner = owner;
        } else {
            console.log("Власник має бути особою старше 18 років");
        }
    }

    displayInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
        if (this.owner) {
            console.log("Власник:");
            this.owner.displayInfo();
            }  else {
                console.log("Цей автомобіль ще не має власника");
        };
    };
};

// Створення декількох екземплярів класу Людина
const person1 = new Person("Діма", 30);
const person2 = new Person("Василь", 31);
const person3 = new Person("Іван", 15);

// Створення декількох екземплярів класу Автомобіль
const car1 = new Car("Toyota", "Camry", 2015, "BC1234AA");
const car2 = new Car("Honda", "Accord", 2018, "AB5678AB");
const car3 = new Car("Nissan", "Altima", 2020, "BC9999AA");

// Присвоєння власників автомобілям
car1.assignOwner(person1);
car2.assignOwner(person2);
car3.assignOwner(person3);

// Вивід інформації про автомобілі та їх власників
car1.displayInfo();
car2.displayInfo();
car3.displayInfo();