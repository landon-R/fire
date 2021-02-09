const mongoose = require("mongoose");

const uri = process.env.URLDB;

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log("db conected successfully")
);
