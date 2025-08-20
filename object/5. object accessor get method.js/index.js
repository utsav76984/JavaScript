

// In JavaScript, there are two kinds of object properties:

// Data properties
// Accessor properties


const student = {
  firstName: "utsav",
  
};


// In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

// get - to define a getter method to get the property value
// set - to define a setter method to set the property value

// get method example


const studentDetails = {
  name: "utsav",
  age: 22,

  get studentAge() {
    return this.age;
  },
};

console.log("student age is ", studentDetails.studentAge);

const carDetail = {
  company: "porsche",
  color: "Blue",

  get carCompany() {
    return this.company;
  },
};

console.log("car company is ", carDetail.carCompany);

console.log("color is ", carDetail);
