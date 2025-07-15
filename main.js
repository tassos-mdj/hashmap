import { HashMap } from "./hashMap.js";
import { HashSet } from "./hashSet.js";

// Test HashMap
const test = new HashMap;

// Populate
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// Test with initial capacity
console.log(test);
console.log("Hash map's length:", test.length());
console.log("Hash map's capacity:", test.capacity);
console.log("Get apple's value:", test.get('apple'));
console.log("Check if banana is included:", test.has('banana'));

// Add entry - test expansion
console.log("Add entry that leads to expansion ('moon', 'silver')");
test.set('moon', 'silver');
console.log("Map's length after new entry:", test.length());
console.log("Map's new capacity:", test.capacity);

// Test set's correct functionality after expansion
console.log("Get Kite's value:", test.get('kite'));
console.log("Assign new value to kite");
test.set('kite', 'lemon yellow');
console.log("Get Kite's new value:", test.get('kite'));

console.log(test.entries());



// Test HashSet
const test2 = new HashSet;

// Populate
test2.set('apple');
test2.set('banana');
test2.set('carrot');
test2.set('dog');
test2.set('elephant');
test2.set('frog');
test2.set('grape');
test2.set('hat');
test2.set('ice cream');
test2.set('jacket');
test2.set('kite');
test2.set('lion');

// Test with initial capacity
console.log(test2);
console.log("Hash map's length:", test2.length());
console.log("Hash map's capacity:", test2.capacity);
console.log("Get apple:", test2.get('apple'));
console.log("Check if banana is included:", test2.has('banana'));

// Add entry - test expansion
console.log("Add entry that leads to expansion ('moon')");
test2.set('moon');
console.log("Map's length after new entry:", test2.length());
console.log("Map's new capacity:", test2.capacity);

// Test set's correct functionality after expansion
console.log("Get Kite's value:", test2.get('kite'));
console.log("Add another entry ('sun')");
test2.set('sun');
console.log("Map's length after new entry:", test2.length());
console.log(test2.entries());
console.log("Remove entry 'sun'");
test2.remove('sun');
console.log("Map's new length:", test2.length());


console.log(test.entries());