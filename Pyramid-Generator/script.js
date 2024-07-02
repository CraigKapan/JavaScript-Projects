"use strict";

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

// Change code to different type of loop
/* for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count))
} */

/* while (rows.length < count) {
  rows.push(padRow(rows.length+1, count));
} */

  // upside down pryamid
 for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count))
} 


let result = "";

for (const row of rows) {
  result += "\n" + row;
}

console.log(result);
