// let age = 75;

// if(age > 18) {
//     console.log("you may enter!");
// } else if (age === 18) {
//     console.log("you just turn 18 welcome");
// } else {
//     console.log('Grow up');
// }

// let i = 0;

// while(i < 10) {
//     console.log(i);
//     i++;
// }

// let i = 0;

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }


// a function declaration

// function square(number) {
//     return number * number;
// }

// // a function call
// let result = square(5);

// console.log(result);


// a function declaration

// function name(params){
//     //statement
//     // have access to this. keyword

// }

// // a function call
// let name = function(params) {
//     //statement
// }

// // an arrow function

// const name = (params) => {
//     //statement
// }


// function sayHi(name) {
//     console.log(`Hi, ${name}!`);
// }

// sayHi('jane');
// sayHi('joy');

// every function return undefined

// function add (a, b) {
//     return a + b;
// }

// let sum = add(2, 2);
// console.log(sum);

// function test() {
//     return true;
//     return false;
// }
// let bool = test();
// console.log(bool);



// arrow function

// let square = (number) => {
//     return number * number; 
// }
// // or
// let square1 = number => number * number;

// let result = square(5);
// console.log(result);

// let result1 = square1(10);
// console.log(result1);

//---------------------------solving-------------------------------------

function smallestNumber(numberOfArray) {

    let smallest = numberOfArray[0];

    for (let i = 0; i < numberOfArray.length; i++) {
        // console.log(numberOfArray[i]);
        if (numberOfArray[i] < smallest) {
            smallest = numberOfArray[i];
        }
        return smallest;
    }
}

console.log(smallestNumber([10,20,30,40,50,60,70]));







//---------------------------DOM--------------------------------

// Get ElementById

// const title = document.getElementById('main-heading');

// console.log(title);

// Get ElementByClassName

// const listIteam = document.getElementsByClassName('list-item');

// console.log(listIteam);

// Get ElementByTagName

// const listIteam = document.getElementsByTagName('li');

// console.log(listIteam);

// QuerySelector

// const container =  document.querySelector('div');
//  console.log(container);

// QuerySelectorAll

// const container = document.querySelectorAll('div');

// console.log(container);


// DOM manipulation

// const title = document.querySelector('#main-heading');

// title.style.color = 'black';
 
// console.log(title);


// const listIteams = document.querySelectorAll('.list-item');


// for (let i = 0; i < listIteams.length; i++) {
    
//     listIteams[i].style.fontSize = '2rem';

// }

// console.log(listIteams);


// // Create Element

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// // adding element
// ul.append(li);

// modifying element


