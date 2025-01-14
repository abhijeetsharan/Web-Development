// Class and Objects


class Student{
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    talk(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}

let student1 = new Student("Abhijeet", 25 , 99);
student1.talk();