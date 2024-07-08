// Define the Person class
class Person {
  // Constructor for Person class
  constructor(name, age) {
    this._name = name;  // Use a private property for the name
    this._age = age;    // Use a private property for the age
  }

  // Getter for the name property
  get name() {
    return this._name;
  }

  // Setter for the age property
  set age(age) {
    if (typeof age === 'number' && age >= 0) {
      this._age = age;
    } else {
      console.log('Please enter a valid age (a non-negative number).');
    }
  }

  // Optional: Getter for the age property (if you need to get the age)
  get age() {
    return this._age;
  }
}

// Define the Student class that extends Person
class Student extends Person {
  // Method for Student class
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Define the Teacher class that extends Person
class Teacher extends Person {
  // Method for Teacher class
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
