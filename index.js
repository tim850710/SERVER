const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const authRoute = require("./routes").auth;

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to Altas");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", authRoute);

app.listen(8080, () => {
  console.log("server running at port 8080.");
});
