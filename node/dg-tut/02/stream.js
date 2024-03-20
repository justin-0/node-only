const fs = require("fs");

const readableStream = fs.createReadStream("./files/lorem.txt", {
  encoding: "utf8",
});

const writeableStream = fs.createWriteStream("./files/loremnew.txt");

// readableStream.on("data", (chunkOfData) => writeableStream.write(chunkOfData));

/* CONSIDERED MORE EFFICIENT */
readableStream.pipe(writeableStream);
