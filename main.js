import { HashMap } from "./hashMap.js";

let map = new HashMap;

map.set("Tassos Kotidis", "Programmer");
map.set("John Doe", "Accounting");
map.set("Jane Doe", "CTO");

console.log(map);

console.log(map.remove("Jane doe"));
console.log(map.remove("Jane Doe"));

console.log(map);
