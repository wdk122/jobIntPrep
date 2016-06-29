/*
functions and variables are hoisted in js. 
es6 class declarations are not hoisted.

*/

// ==================================================================

// the code below alerts 10.
var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}
bar();

// due to hoisting, it is run like:
var foo;
function bar() {
  var foo;
  if (!foo) {
    foo = 10;
  }
  console.log(foo);
}
foo = 1;
bar();


// ==================================================================

// the code below alerts 1.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
alert(a);

// due to hoisting, it is run like:
var a;
function b() {
  function a() {};
  a = 10;
  return;
}
a = 1;
b();
alert(a);

// ==================================================================
// code like this:

function foo() {
  bar();
  var x = 1;
}

// is actually interpreted like this:

function foo() {
  var x;
  bar();
  x = 1;
}
// ==================================================================

// this code

var x = 1;
console.log(x); // 1
if (true) {
  var x = 2;
  console.log(x); // 2
}
console.log(x); // 2

// is run like

var x;
x = 1;
console.log(x); // 1
if (true) {
  x = 2;
  console.log(x); // 2
};
console.log(x); // 2

// ==================================================================

// In JavaScript, a name enters a scope in one of four basic ways:

// 1. Language-defined: All scopes are, by default, given the names 
// this and arguments.
// 2. Formal parameters: Functions can have named formal parameters, 
// which are scoped to the body of that function.
// 3. Function declarations: These are of the form function foo() {}.
// 4. Variable declarations: These take the form var foo;.


// ==================================================================

console.log(foo);
var foo = 2;



// ==================================================================
// airbnb style guide



// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================

// TODO: Find out how/if let and const are hoisted
// http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html














































