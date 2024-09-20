const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
require("dotenv").config();
const cors = require("cors");
const authRoute = require("./routes/user");
const bookingRoute = require("./routes/booking");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(authRoute);
app.use(bookingRoute);
const PORT = 4500;
mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(PORT);
  console.log(`Server is running at port - ${PORT}`);
});
