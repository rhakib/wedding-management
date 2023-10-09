1. 

let greeting;
greetign = {};
console.log(greetign);

A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer: A: {}


2. 

function sum(a, b) {
  return a + b;
}

sum(1, "2");

A: NaN
B: TypeError
C: "12"
D: 3

Answer: A: NaN


3. 

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer: A: ['🍕', '🍫', '🥑', '🍔']


4. 

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer: B: Hi there, undefined

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

Answer: C: 3