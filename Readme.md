1. What is the difference between var, let, and const?

Answer:
   var: it is a function-scoped or globally scoped. It can be updated and re-declared withing its scope. It is hoisted and initialized with undefined by default.

let: it is block-scoped which allow updates but not re-declarations within the same block. It is hoited but stays in the temporal dead zone until initialized.

const: it is block scoped and cannot be updated or re declared once assigned. It must be initialized during declaration and is also hoisted with temporal dead zone behavoir.


2. What is the difference between map(), forEach(), and filter()?

Answer:
   forEach(): it executes a function on each array element and return undefined. it does not create a new array.

map(): it applies a function on every element and returns a new array with the transormed elements.

filter(): it test every element with a condition and return a new array containing elements that satisfy the condition.

3. What are arrow functions in ES6?

Answer:Arrow functions provide a compact syntax for writing functions:

They can omit the function keyword. They can implicitly return an expression if there is a single-line body. They don't have their own this or arguments object; they inherit these from the enclosing scope.

Example: (param) => param \* 2 returns double the parameter.


4. How does destructuring assignment work in ES6?

Answer: Destructuring allows unpacking values from arrays or properties from objects into distinct variables:

Array destructuring: const [a, b] = [1, 2];

Object destructuring: const {name, age} = person;
Supports nested destructuring and default values. It Does not mutate the original object or array.


5. Explain template literals in ES6. How are they different from string concatenation?

Answer:Template literals use backticks ` and allow embedded expressions with ${expression}, supporting multi-line strings easily.

String concatenation uses + to join strings and variables.

Template literals improve readability and maintainability by avoiding complex concatenation.

Template literals were introduced in ES6; they may have slight parsing overhead but provide clearer syntax especially with variables and multi-line strings
