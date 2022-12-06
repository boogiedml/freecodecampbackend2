require("dotenv").config();
let express = require("express");
let app = express();

app.use("/public", express.static(`${__dirname}/public`));

const msgString = "Hello json";

if (process.env.MESSAGE_STYLE === "uppercase") {
  response = msgString.toUpperCase();
} else {
  response = msgString;
}

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});
app.get("/json", (req, res) => {
  res.json({ message: response });
});

module.exports = app;
