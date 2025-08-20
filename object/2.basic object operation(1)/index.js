// accessing object properties

let data ={
        name: "utsav",
        age:"20",
        student: "full stack devloper",
      
};   


console.log("data: ", data);

console.log("persone  name:", data.name);

console.log("person student :", data["student"]);


data.name = "john doe";

data["name"] = "john doe";


console.log("person Name :", data.name);


data.email = "email@example.com";

console.log("person details object  with all changes:", data);

// adding properties to an Object using brackets notation

data["software"] = "Developing";

console.log("person details object with all changes:", data);