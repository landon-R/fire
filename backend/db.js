const mongoose = require("mongoose");

// mongoose.connection.on("open", () => console.log("db conected rol"));

const uri = process.env.URLDB;

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log("db conectted")
);
