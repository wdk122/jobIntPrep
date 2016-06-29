// function declaration -- whole thing is hoisted
function foo() {

}
// function expression -- 
const foo = function() {

}

/**

airbnb prefers function declarations. Why? Function declarations are 
named, so they're easier to identify in call stacks. Also, the whole 
body of a function declaration is hoisted, whereas only the reference 
of a function expression is hoisted. This rule makes it possible to 
always use Arrow Functions in place of function expressions.

*/

// https://github.com/airbnb/javascript