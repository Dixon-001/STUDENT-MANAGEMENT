// constructor function 

function Students(name, age, course, score) {
    
  this.name = name;
  this.age = age;
  this.course = course;
  this.score = score;
}
// protype method intruduce() that shows students's details 
Students.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name}, I am ${this.age} years old, studying ${this.course}. I had a Score of ${this.score}`);
};
//  3 students' info
const adam = new Students("Adam", 20, "Computer engineering", 85);
const bosan  = new Students("Bosan", 22, "mechanical Engineering", 62);
const cynthia  = new Students("Cynthia", 19, "Mathematics", 45);
const students = [adam, bosan, cynthia];

// a protype getresukt() if student scores above or below 50
Students.prototype.getResult = function () {
 if (this.score >= 50) {
  return "Pass";
} else {
  return "Fail";
}
};

// function to update newscore 
Students.prototype.updateScore = function (newScore) {
  this.score = newScore;
};
bosan.updateScore(87);

// a pfuntion that returns the grade 
Students.prototype.getGrade = function () {
  if (this.score >= 80 && this.score < 100) return "A";
  if (this.score >= 70) return "B";
  if (this.score >= 60) return "C";
  if (this.score >= 50) return "D";
  return "F";
};

// for highest student 
let highest = students[0];
for (let i = 1; i < students.length; i++) {
  if (students[i].score > highest.score) {
    highest = students[i];
  }
}

// for lowest student 
let lowest = students[0];
for (let i = 1; i < students.length; i++) {
  if (students[i].score < lowest.score) {
    lowest = students[i];
  }
}

// average score of al students 
let total = 0;
for (let i = 0; i < students.length; i++) {
  total += students[i].score;
}
const average = total / students.length;

// proof that introduce(),getResult(), and getGrade() are stored on students.prototype and not inside each student 
console.log(students.hasOwnProperty("introduce"))
console.log(Students.prototype.hasOwnProperty("introduce"))

console.log(students.hasOwnProperty("getResult"))
console.log(Students.prototype.hasOwnProperty("getResult"))

console.log(students.hasOwnProperty("getGrade"))
console.log(Students.prototype.hasOwnProperty("getGrade"))

// to show that all students share same prototype uing getPrototypeOf() 
console.log(Object.getPrototypeOf(adam) === Students.prototype);
console.log(Object.getPrototypeOf(adam) === Object.getPrototypeOf(bosan)); 
console.log(Object.getPrototypeOf(bosan) === Object.getPrototypeOf(cynthia)); 

adam.introduce();   
bosan.introduce();
cynthia.introduce()
console.log(cynthia.getResult())
console.log(adam.getResult())
console.log(cynthia.getGrade())
console.log(highest) 
console.log(lowest) 
console.log(average)

