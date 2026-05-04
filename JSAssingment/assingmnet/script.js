// <!-- 1. Declare a global variable and print it -->

let name = "Aastha";
console.log(name);

// 2. Declare a global variable and access it inside a function
let city = "Bhopal";

function showCity() {
    console.log(city);
}

showCity();

// 3. Local variable using var inside function
function test() {
    var x = 10;
    console.log(x);
}

test();


// 4. Access local variable outside function (Error)
function demo() {
    var y = 20;
}

demo();
console.log(y);

//  5 let inside if block
function check() {
    if (true) {
        let a = 5;
        console.log(a);
    }
}

check();

// 6. Access let outside block (Error)
function test() {
    if (true) {
        let b = 10;
    }
    console.log(b);
}

test();

// 7. const inside block
{
    const pi = 3.14;
    console.log(pi);
}


// 8. Access const outside block (Error)
{
    const pi = 3.14;
}

console.log(pi);

// 9. Global + Local + Block variables
let globalVar = "I am global";

function demo() {
    var localVar = "I am local";

    if (true) {
        let blockVar = "I am block";

        console.log(globalVar);
        console.log(localVar);
        console.log(blockVar);
    }

    console.log(globalVar);
    console.log(localVar);
}

demo();

console.log(globalVar);

// 10. var vs let vs const scope
function example() {
    if (true) {
        var x = 1;
        let y = 2;
        const z = 3;
    }

    console.log(x);
    console.log(y);
    console.log(z);
}

example();

// practice sheet 2

// 1. var – log before declaration

console.log(a); 
var a = 10;

// 2. var – before and after initialization

console.log(a); 
var a = 20;
console.log(a);

// 3. let before declaration

console.log(x); 
let x = 5;

// 4. const before declaration
console.log(y); 
const y = 10;

// 5. Function declaration (call before define)
greet();

function greet() {
    console.log("Hello");
}

// 6. Function expression (call before assignment)
sayHi(); 

var sayHi = function () {
    console.log("Hi");
};

// 7. Function expression behaves like variable
console.log(test); 

var test = function () {
    console.log("Test");
};

// 8. TDZ with let inside block
{
    console.log(a); 
    let a = 10;
}

// 9. var vs let hoisting
console.log(a); 
var a = 1;

console.log(b); 
let b = 2;


// 10. Combined hoisting demo
console.log(a); 
console.log(b); 

var a = 10;
let p = 20;

hello();

function hello() {
    console.log("Hello");
}
