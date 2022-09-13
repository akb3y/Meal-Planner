
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/simply", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .catch((err) => new Error("Error connecting w/ Mongoose: ", err));
