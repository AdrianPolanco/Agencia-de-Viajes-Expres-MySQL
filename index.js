import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

db.authenticate()
    .then(() => console.log("¡Conexion exitosa!"))
    .catch((error) => {
        console.log("Conexion rechazada");
        console.log(error);
    });

//Aqui el process.env.PORT es basicamente una variable que representa el puerto en el que se correra ya en produccion de no estar disponible el puerto 3000
const port = process.env.PORT || 3000;

//Agregando el template engine PUG para mostrar plantillas
app.set("view engine", "PUG");

//Obtener la fecha actual
app.use((req, res, next) => {
    const year = new Date();
    //res.locals es un objeto del res donde podemos guardar variables para usarlas en las vistas
    res.locals.currentYear = year.getFullYear();
    res.locals.nombre = "Agencia de viajes";
    //Aqui usamos el next() para que despuees de ejecutar lo que hay en esta funcion, pase a las siguientes funciones y la pagina no se quede cargando perpetuamente y rechace la conexion
    next();
});

//Definir la carpeta public, que se llama asi por convencion y sera la carpeta a la que tendran acceso los usuarios
//.use() responde a todos los verbos HTTP
app.use(express.static("public"));
//Agregar router
app.use("/", router);

app.listen(port, () => {
    console.log(`Corriendo en puerto ${port}`);
});
