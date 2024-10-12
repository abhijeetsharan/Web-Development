class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(currentYear){
        return currentYear - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

const car = new Car('Toyota', 2015);

console.log(car.name);

console.log(`The car is ${car.age(year)} years old.`);