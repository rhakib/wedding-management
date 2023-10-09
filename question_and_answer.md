1. 

let greeting; <br>
greetign = {}; <br>
console.log(greetign); <br>

A: {}  <br>
B: ReferenceError: greetign is not defined <br>
C: undefined <br>

**Answer:** A: {} <br>
**Summary:** This ('greetign') attempts to log the value in a variable. Since greetign was assigned an empty object, so this will log an empty object to the console.


2. 

function sum(a, b) {<br>
  return a + b; <br>
}

sum(1, "2");

A: NaN <br>
B: TypeError <br>
C: "12" <br>
D: 3 <br>

**Answer:** A: "12" <br>
**Summary:** when we use the + operator to add values, if one of the value is a string, JavaScript will perform string concatenation instead of numerical addition.  In this case, "2" is a string and we are getting value "12".



3. 

const food = ["🍕", "🍫", "🥑", "🍔"]; <br>
const info = { favoriteFood: food[0] }; <br>

info.favoriteFood = "🍝"; <br>

console.log(food);

A: ['🍕', '🍫', '🥑', '🍔'] <br>
B: ['🍝', '🍫', '🥑', '🍔'] <br>
C: ['🍝', '🍕', '🍫', '🥑', '🍔'] <br>
D: ReferenceError

**Answer:** A: ['🍕', '🍫', '🥑', '🍔'] <br>
**Summary:** We know reassignment of the info.favoriteFood property doesn't affect the original food array. Changing the property value does not change the original array element.




4. 

function sayHi(name) { <br>
  return `Hi there, ${name}`; <br>
}

console.log(sayHi());

A: Hi there, <br>
B: Hi there, undefined <br>
C: Hi there, null <br>
D: ReferenceError <br>

**Answer:** B: Hi there, undefined <br>
**Summary:** We are getting undefined, because we didn't pass any parameter to the function.

5. 

let count = 0; <br>
const nums = [0, 1, 2, 3];

nums.forEach((num) => { <br>
  if (num) count += 1; <br>
});

console.log(count); <br>
A: 1 <br>
B: 2 <br>
C: 3 <br>
D: 4 <br>

**Answer:** C: 3 <br>
**Summary:** Inside the arrow function, there is an if statement. It checks if the current num is truthy. If num is truthy, it increments the count variable by 1.