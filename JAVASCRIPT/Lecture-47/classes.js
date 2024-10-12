class Person {
    // The constructor method is called when a new object is created
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display the person's details
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  
    // Static method belongs to the class itself, not the instance
    static species() {
      return 'Homo sapiens';
    }
  }
  
  // Creating an instance of the Person class
  const person1 = new Person('Alice', 30);
  
  // Accessing the instance method
  person1.displayInfo(); // Output: Name: Alice, Age: 30
  
  // Accessing the static method
  console.log(Person.species()); // Output: Homo sapiens
  