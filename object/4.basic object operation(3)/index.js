
//  creating objects using class constructor

class data{
    constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const person = new data("utsav", 20, "full stack developer");

console.log("person details: ", person);


// creating one more  object with different values using object literals

const studentsDetails = {
  totalStudents: 300,
  exam: "php test",
  block: "A",
};

// now merging two objects into one object


const allDetails = { ...person, ...data };

console.log("allDetails: ", allDetails);

// object length

console.log("allDetails length: ", Object.keys(allDetails).length);