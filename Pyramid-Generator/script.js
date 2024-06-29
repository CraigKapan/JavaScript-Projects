const character = "#";
const count = 8;
const rows = [];

function padRow() {
    return "Hello!"
}
const call = padRow();
console.log(call);

for (let i = 0; i < count; i++) {
    rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
    result += "\n" + row;
}

console.log(result);