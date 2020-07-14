const mongoose = require("mongoose");

mongoose.connection.on("open", () => console.log("db conected rol"));

async function connectDB({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
  });
}

module.exports = connectDB;
