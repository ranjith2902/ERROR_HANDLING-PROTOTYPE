class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  const person1 = new Person("Alice", 25);
console.log(person1.getDetails()); // Output: "Name: Alice, Age: 25"

const person2 = new Person();
console.log(person2.getDetails()); // Output: "Name: Unknown, Age: 0"
