
// conditional statement


// =====================if============================

// let age = 16;
// let mode ="dark";

// color ="bleck";

// if (age >= 18) {

//     console.log("you can vote");
    
// }

// if (age < 18) {

//     console.log("you cannot vote");
    
// }



// =====================if-else========================

// odd end evennumber


// let num = 10;

// if (num % 2 === 0) {
    
//     console.log(num," is even");
// }else{

//     console.log(num, " is odd");
// }



// syntax -> rules

// =======================else-if-==========================



// let mode = "black";
// let color;

// if (mode === "black") {
//     color = "black";  
// }else if(mode === "blue"){
//     color="blue";
// }else if(mode === "red"){
//     color="red";
// }else{
//     color: "white";
// }


// console.log(color);


// =================switch=====================

// let num =prompt("enter number")

// if (num % 3=== 0) {
 
//     console.log(num, "is multiple of 3")
// }else{
//     console.log(num, "is not a multiple of 3")
// }


// =================student mark===================

let score = 50;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 79) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) { // Fixed logical error here
    grade = "D";
} else {
    grade = "F"; // Optional: Handle scores below 50
}

console.log("According to your score, your GRADE WAS: " + grade);

