import express from "express";
import figlet from "figlet";
import path from "path";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  const body = figlet.textSync("Bun!");
  res.send(body);
});

app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "experiments", "index.html"));
});

app.get("/book", (req, res) => {
  res.sendFile(path.join(__dirname, "experiments", "book.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
