class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Instantiate an instance of the Employee class
  const johnDoe = new Employee('John Doe', 'Manager', 50000);
  
  // Call the getSalary method on the instance
  console.log(johnDoe.getSalary()); // Output: 50000
  