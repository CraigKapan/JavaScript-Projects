const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i++) {
    rows.push(character); 
    character.repeat(i + 1);
}

let result = "";

for (const row of rows) {
    result += "\n" + row;
}

console.log(result);