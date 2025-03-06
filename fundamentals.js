// How to declare variables using let, const

const name = "Rayhan";
let age = 26;
age = 27;

console.log(age)

//How to use conditions

if (name === "Rayhan" && age === 27) {
    console.log("Right Person")
}
else (
    console.log("Wrong Person")
)

// Array Operations 

const numbers = [7, 5, 9, 4, 3, 4, 8, 0]
let length = numbers.length;
console.log(length)
console.log(numbers.indexOf(8))
numbers[6] = 1;
console.log(numbers)

// loop

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// function 

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
const callingFunction = multiply(7, 5)
console.log("Result is:", callingFunction)

// Object 

const student = {
    name: "Rayhan",
    lastName: "Uddin",
    age: 27,
    profession: "student"
}
console.log(student.name)
