require("dotenv").config();
const app = require('./app');
const connectDB = require("./db/mongodb"); //CONFIGURACION DE DB MONGO
const { appConfig, dbConfig } = require("./config"); //ficehro config



async function iniApp(appConfig, dbConfig) {
  try {
    //conector a la base de datos
    await connectDB(dbConfig);
    app.listen(appConfig.port, () =>
      console.log(`listen on ${appConfig.port}`)
    );
  } catch (e) {
      console.error(e);
      process.exit(0)
  }
}

iniApp(appConfig, dbConfig)
