const items = [];

document.addEventListener('click', addToList);

// other code

function addToList() {
  const item = document.getElementById('input').value;
  items.push(item);
  document.getElementById('input').value = '';
  displayList();
}

function displayList() {
  let itemsString = '';
  items.forEach((item) => {
    itemsString += `<li>${item}</li>`;
  });
  document.getElementById('items').innerHTML = itemsString;
}

class Vehicle {
  constructor(make, model, engine) {
    this.make = make;
    this.model = model;
    this.engine = engine;
  }
}

class Engine {
  constructor(name, cylinders) {
    this.name = name;
    this.cylinders = cylinders;
  }
}

const n55 = new Engine('N55', 6);

const bmw = new Vehicle('BMW', 'X5', n55);

const list = new List('Need to get');

list.addTask('new sunglasses');
list.addTask('a car');
list.addTask('need to get a rav4');

/**
 *
 * SCOPE
 *
 */

let c = b;

// global scope
const PI = Math.PI;
let a = 0;
var b = 1;

// function scope

function myFunction() {
  // new scope
  let d = 2;
  var f = 3;
  let g = b;
}

// block scope

if (true) {
  let h = 34;
  var i = 45;
}

// console.log(h); // error
console.log(i); // will work

for (var i = 0; i < [0, 1, 2].length; i++) {}

/**
 *
 * HOISTING
 *
 */

// var

var here = "I'm here"; //available in global scope, moves to the top of the file

// functions

myFunction2();

function myFunction2(params) {
  // also hoist to the top
  console.log('hi');
  return 'hi';
}

const myFunction3 = () => {
  console.log('hello');
  return 'hello';
};

const myFunction4 = function myFunction5() {
  console.log('function 5 ran');
};

document.doThatOneThing = function () {
  console.log('did it');
};


