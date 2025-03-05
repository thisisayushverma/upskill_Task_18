// Q1-  Given an array of numbers, use the map function with an arrow function to square each element of the array.
let arr = [1, 2, 3, 4, 5];
const square = arr.map((item) =>  item*item);
// console.log(square);



// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

function getGrade(score){
    return score >= 85 ? "A" : score >= 70 ? "B" : score >= 55 ? "C" : score >= 35 ? "D" : "F";
}

// console.log(getGrade(59));

// Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.


const car = {
    company_name: "Honda",
    model: "Civic",
    year: 2022,
    changeYear: function(newYear){
        this.year = newYear;
    }
}

// console.log("Inital Year",car);
// car.changeYear(2023);
// console.log("Changed Year",car);
// // object destructuring

// const {model, year} = car;
// console.log(model, year);


//Q4-Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const primeFromArray = arr1.filter((item) => {
//     for(let i = 2; i < item; i++){
//         if(item % i === 0){
//             return false;
//         }
//     }
//     return true;
// });

// console.log(primeFromArray);


// Q5- State different use cases of map, filter and reduce functions.

// .map() -> is used for apply some kind of operation in each element of an array. 
// .filter() -> it is used to filtering out the element from an array which does not satisfy the condition.
// .reduce() -> it is used to implement for aggregation type operation like sum,average etc. and give me a single value and from interating an array

// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

async function getData(){
    await fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
    .catch((err)=>{
        console.log("error while fetching data", err);
    })
}

// getData();

// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.


const person = {
    name:{
        first:"John",
        last:"Doe"
    },
    address:"123 Main St",
    contact: {
        phone: "1234567890",
        email:"0wJ5o@example.com"
    }
}

// console.log(person.contact?.phone);