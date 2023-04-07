class Calculator {
    static add(num1, num2) {
      return num1 + num2;
    }
  }
  
  // Instantiate the Calculator class
  const calculator = new Calculator();
  
  // Call the add method
  const result = calculator.constructor.add(5, 10);
  
  console.log(result); // Output: 15
  