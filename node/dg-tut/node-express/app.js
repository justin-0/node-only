const express = require("express");
const app = express();
const port = 4200;

app.use((req, res) => {
  console.log(req.url);
  res.send("<h1>Express says hello</h1>");
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
