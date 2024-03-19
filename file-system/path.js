const path = require("path");
const fs = require("fs");
const list = "./list.txt";

console.log("Directory", path.dirname(list));
console.log("Basename", path.basename(list));
console.log("Extension", path.extname(list));

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
