// Creating object using functions constructor
function Data(name, age, student){

   this.name = name;
   this.age = age;
   this.student = student;
}

const person = new Data("utsav", 20, "BCA");

console.log("person object created", person)

// adding properties to object

Data.prototype.email = "ukalathiyagmail.com";

console.log(person.email)


// Removing Properties from an Object

delete person.student;


console.log("person object after job has been deleted", person);


// Checking if a Property Exists

console.log("checking if a property exists", person.hasOwnProperty("job")); 

console.log("checking if a property exists", person.hasOwnProperty("name")); 

// Iterating Through Object Properties

for (let key in person) {
  console.log("person details", key + ":" + person[key]);
}
