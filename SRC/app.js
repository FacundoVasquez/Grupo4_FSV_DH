const express = require("express");
const { redirect } = require("express/lib/response");
const app = express();
const path = require("path");
<<<<<<< HEAD
const methodOverride = require("method-override");
=======
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
>>>>>>> 88f6460e9eebafdf3074c688d8cb6917628c686b


//Se configura la ruta de la carpeta pública y views
const publicPath = path.resolve(__dirname,"../public");
const viewPath = path.join(__dirname, 'Views');

<<<<<<< HEAD
// Importaciones de Rutas
const mainRouter = require("./router/mainRouter");
const productsRouter = require("./router/productsRouter");

//Configuraciones
app.set('views', path.join(__dirname, 'Views'));
app.set("view engine", "ejs"); 
app.use(express.static(publicPath));
app.use(express.urlencoded ({extended:false}));
app.use (methodOverride ("_method")); 
app.use("/product", productsRouter)
app.use('/', mainRouter);

//Error 404
=======
//Configuración
app.set('views', viewPath);
app.set("view engine", "ejs"); 
app.use(express.static(publicPath));

// Permite trabajar con los datos que se envian desde el FORM
app.use(express.urlencoded ({extended:false}));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

//Rutas
const mainRouter = require("./router/mainRouter");
app.use('/', mainRouter);

const productsRouter = require("./router/productsRouter");
app.use("/product", productsRouter)

/* 
>>>>>>> 88f6460e9eebafdf3074c688d8cb6917628c686b
app.use(function(req,res,next){
    res.status(404);
    return res.render("notFound")}
); 
*/

app.use(express.json()); 

//Servidor
app.listen(3000, () => console.log ("Servidor Corriendo")); 