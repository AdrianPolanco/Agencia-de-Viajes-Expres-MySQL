import express from "express";

//Lo igualamos a express.Router() para evitar crear otra instancia de express y con ello evitar reiniciar el servidor, de modo que sea todo aqui la misma aplicacion
const router = express.Router();

//Creando los endpoints
//La req es lo que el usuario nos envia(solicitud), la res es lo que enviamos al usuario(respuesta)
router.get("/", (req, res) => {
    const bienvenida = "Bienvenid@";
    res.render("inicio", {
        pagina: bienvenida,
        inicio: "Inicio",
    });
});
//Aqui le estamos devolviendo un render que devolvera un template llamado secundaria, scaneara todo, localizara el archivo y lo devolvera como respuesta
router.get("/nosotros", (req, res) => {
    const nosotros = "Nosotros";
    //Ademas del archivo PUG que usaremos como vista, adicional podemos especificar parametros que podriamos mostrar en la vista, como por ejemplo los resultados de una consulta a una base de datos, esto se logra pasando un objeto como segundo parametro del res.render()
    //Devolvemos el archivo PUG con el nombre de nosotros
    res.render("nosotros", {
        pagina: nosotros,
    });
});
//res.render() sirve para mandar documentos HTML completos

router.get("/viajes", (req, res) => {
    const viajes = "Viajes";
    res.render("viajes", {
        pagina: viajes,
    });
});

router.get("/testimoniales", (req, res) => {
    const testimoniales = "Testimonios";
    res.render("testimoniales", {
        pagina: testimoniales,
    });
});

export default router;
