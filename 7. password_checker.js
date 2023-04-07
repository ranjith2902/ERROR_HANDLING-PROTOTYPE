class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    getPassword() {
      return this.password.replace(/./g, "*");
    }
  
    setPassword(newPassword) {
      const passwordRegex = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
      if (passwordRegex.test(newPassword)) {
        this.password = newPassword;
      } else {
        console.error("Invalid password. Password should be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
const user = new User("RANJITH", "Password123");

// user.setPassword("myPassword");
// console.log(user.getPassword()); 
//Invalid password. Password should be at least 8 characters long and contain at least one number and one uppercase letter.
// ***********

user.setPassword("Password123"); console.log(user.getPassword()); //***********