import backpack from "./backpack.js";
const everydaybackpack = new backpack(
    "BP1",
    30,
    "blue",
    5,
    10,
    10,
    false,
    "December 31, 2021 15:00:00 EST"
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
const content = `
<main>
        <h1>backpack</h1>
        <ul>
            <li>Name ${everydaybackpack.name}</li>
            <li>Volume ${everydaybackpack.volumn}</li>
            <li>Color ${everydaybackpack.color}</li>
            <li>Pocket number ${everydaybackpack.pocketnum}</li>
            <li>Lid status ${everydaybackpack.lidOpen}</li>
        </ul>
</main>
`;
document.body.innerHTML=content;

console.log("backpack object is: ",everydaybackpack);
console.log("backpack object is: ",newbackpack);
console.log("date accquired: ", everydaybackpack.dateAccquired);
console.log("age of backpack: ",everydaybackpack.age());


