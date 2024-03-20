const fsPromises = require("fs").promises;
const path = require("path");

/* PROMISES READFILE, PATH.JOIN METHOD TO COMBINE FULL PATHNAME FOR TEXT FILE.
  THEN WRITE NEW FILE, APPEND NEW DATA TO SAME FILE AND FINALLY RENAME FILE.
*/
async function fileAction() {
  try {
    const fileData = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(fileData);
    await fsPromises.writeFile(
      path.join(__dirname, "files", "newFile.txt"),
      "This has been written by the filesystem"
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "newFile.txt"),
      "\nAppened to the file with a newline added via filesystem"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "newFile.txt"),
      path.join(__dirname, "files", "renamedNewFile.txt")
    );
  } catch (error) {
    console.log(error);
  }
}

fileAction();
