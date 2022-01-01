import backpack from "./backpack.js";
const everydaybackpack = new backpack(
    "BP1",
    30,
    "blue",
    5,
    10,
    10,
    false
);

const newbackpack = new backpack(
    "new Backpack",
    20,
    "purple",
    4,
    10,
    10,
    true
)
console.log("backpack object is: ",everydaybackpack);
console.log("backpack object is: ",newbackpack);
console.log("color ",everydaybackpack.color);


