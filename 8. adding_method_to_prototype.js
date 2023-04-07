// Create the prototype object
function Student(name) {
    this.name = name;
  }
  
  // Add the printDetails method to the prototype
  Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Instantiate a new Student object with name "Mithun"
  const student = new Student("Ranjith");
  
  // Call the printDetails method
  student.printDetails(); // Output: "Hello, my name is Mithun"
  