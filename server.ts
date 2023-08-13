import express from "express";
import figlet from "figlet";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  const body = figlet.textSync('Bun!');
  res.send(body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
