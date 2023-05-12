const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/midi-files/:artistName", (request, response) => {
  const { artistName } = request.params;
  const files = fs.readdirSync(`./src/midi-files/${artistName}`);
  return response.json({ files: files });
});

app.use("/midi-files", express.static(`${__dirname}/midi-files`));

app.listen(8000, () => {
  console.log("server started");
});
