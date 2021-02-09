//CONFIGURACION PARA HEROKU


//URL DE FRONTEND PARA PEDIR DATOS
process.env.FRONTEND_URL = 'http://localhost:3000'



//PUERTO DE SERVER
process.env.PORT = process.env.PORT || 4000;

//SI ESTOY EN DEV O PRODUCCION
process.env.NODE_ENV = process.env.NODE_ENV || "dev";


//VARIABLE DE ENTORNO SECRET  SUBIR A HEROKU
process.env.SECRET =  process.env.SECRET || "desarrollo"



//PUERTO DE DB DE MONGODB
let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost/carrito01";
} else {
  urlDB = "mongodb+srv://abraham:jIjRdwT5uLjmCu2L@cafe.8wspk.mongodb.net/cafe";
}

process.env.URLDB = urlDB
