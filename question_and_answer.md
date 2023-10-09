1. 

let greeting;
greetign = {};
console.log(greetign);

A: {}
B: ReferenceError: greetign is not defined
C: undefined

**Answer:** A: {} <br>
**Summary:** This ('greetign') attempts to log the value in a variable. Since greetign was assigned an empty object, so this will log an empty object to the console.


2. 

function sum(a, b) {
  return a + b;
}

sum(1, "2");

A: NaN
B: TypeError
C: "12"
D: 3

**Answer:** A: "12" <br>
**Summary:** when we use the + operator to add values, if one of the value is a string, JavaScript will perform string concatenation instead of numerical addition.  In this case, "2" is a string and we are getting value "12".



3. 

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

**Answer:** A: ['🍕', '🍫', '🥑', '🍔'] <br>
**Summary:** We know reassignment of the info.favoriteFood property doesn't affect the original food array. Changing the property value does not change the original array element.




4. 

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

**Answer:** B: Hi there, undefined <br>
**Summary:** We are getting undefined, because we didn't pass any parameter to the function.

5. 

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

**Answer:** C: 3 <br>
**Summary:** Inside the arrow function, there is an if statement. It checks if the current num is truthy. If num is truthy, it increments the count variable by 1.