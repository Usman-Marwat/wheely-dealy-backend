const express = require("express");
var bodyParser = require("body-parser");

const messages = require("./routes/messages");

const app = express();

const port = process.env.PORT || 7375;
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/home", (req, res) => {
  res.send("Wheely Daily Notifications Backend!");
});
app.use("/api/messages", messages);
