Live site link: [https://beamish-selkie-a0840e.netlify.app/](https://beamish-selkie-a0840e.netlify.app/)

#### 1) What is the difference between `null` and `undefined`?

Null means there is no value.

Undefined means the variable is declared but not assigned

#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

map() function loop through an array, execute the given operation and returns the output in another array.

foreach() function execute a given operation on an array and return the output separately, not in an array.

#### 3) What is the difference between `==` and `===`?

Double equal (==) compare the value only. But triple equal (===) compare both value and type.

#### 4) What is the significance of `async`/`await` in fetching API data?

Async/await ensure that the execution of the function follows order and wait for the response properly, before going to the next function.

#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

Scope is the way to declaring variable which enables or restrict the means of accessing the variable from different area of program. For example:

Global Scope variable can be called or used from anywhere of the code. If a variable is declared using let or var, and is declared outside of any function or loop, that variable is in Global scope

Function scope is when a variable is declared inside a function. That variable can be used only inside that function.

Block scope is when a variable is declared inside the {} brack and using "let" or "const". Those variable can not be called from anywhere outside that bracket. But if the variable is called using "var", that is global variable. Using "var" is outdated and should not be used unless any specific usecase.
