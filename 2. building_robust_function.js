function getPerson(person) {
   try {
     if (typeof person !== 'object' || !person.name || !person.age) {
       throw new Error('Invalid parameter type');
     }
     return `Name: ${person.name}, Age: ${person.age}`;
   } catch (err) {
     return err.message;
   }
 }
 
 const person = { name: 'John Doe', age: 30 };
console.log(getPerson(person)); // Name: John Doe, Age: 30

const invalidPerson = { name: 'Jane Doe' };
console.log(getPerson(invalidPerson)); // Invalid parameter type

const invalidParameter = 'John Doe';
console.log(getPerson(invalidParameter)); // Invalid parameter type
