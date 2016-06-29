/*


Every js function forms a closure on creation.
In JavaScript, a closure is a function to which the variables of the surrounding context are bound by reference.




*/

function foo() {
  var bar = 3;
  function baz() {
    return bar;
  }
  return baz;
};

var qux = foo(); // qux is function that returns bar
qux(); // => 3 // assignment of bar = 3 is remembered when foo is invoked


// showName function without closures:

function showName (firstName, lastName) { 
  ​return "Your name is " + firstName + " " + lastName;
} 

// A Basic Example of Closures in JavaScript: 

function showName (firstName, lastName) { 
  ​var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter​
  ​function makeFullName () {         
    ​return nameIntro + firstName + " " + lastName;     
  };
​
​  return makeFullName (); 
} 
​
showName ("Michael", "Jackson"); // Your name is Michael Jackson 






/*

definitions:
  scope:
    set of things that are accessible in a given portion of a program
  lexical scope:
    statically defined by the function’s physical placement within
    the written source code.
    stuff defined within functions is not accessible outside of that
    scope.
  VariableEnvironment:




*/


/*



sources:
https://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/

http://javascriptissexy.com/understand-javascript-closures-with-ease/

*/