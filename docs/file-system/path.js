const path = require("path");
const fs = require("fs");
const list = "./list.txt";

console.log("Directory", path.dirname(list));
console.log("Basename", path.basename(list));
console.log("Extension", path.extname(list));

/* STATS FROM FILE */
const fileStats = (file) => {
  console.log("hi");
  fs.stat(file, (err, stats) => {
    if (err) {
      console.log("error", err);
    }
    console.log("hello");
    console.log(stats.size);
  });
};

fileStats(list);

/* READ FILE */
fs.readFile(list, (err, data) => {
  if (err) console.log(err);

  console.log("Buffer:", data);
  console.log("Buffer to String:", data.toString());
});

/* WRITE TO FILE */

let text = "See you in three months Trev";

fs.writeFile(list, text, (err) => {
  if (err) console.log(err);

  console.log("File written");
});

/* APPEND TEXT TO A FILE */
fs.appendFile(list, "Glad you are back to work", (err) => {
  if (err) console.log(err);

  console.log("content appended to file");
});
