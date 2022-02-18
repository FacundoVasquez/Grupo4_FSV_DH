const express = require("express");
const { redirect } = require("express/lib/response");
const app = express();
const path = require("path");

//Se configura la ruta de la carpeta pública y views
const publicPath = path.resolve(__dirname,"../public");
const viewPath = path.join(__dirname, 'Views');

//Configuración
app.set('views', viewPath);
app.set("view engine", "ejs"); 
app.use(express.static(publicPath));

// Permite trabajar con los datos que se envian desde el FORM
app.use(express.urlencoded ({extended:false}));
app.use(express.json());

//Rutas
const mainRouter = require("./router/mainRouter");
app.use('/', mainRouter);

const productsRouter = require("./router/productsRouter");
app.use("/product", productsRouter)

app.use(function(req,res,next){
    res.status(404);
    return res.render("notFound")}
);

app.use(express.json()); 

//Servidor
app.listen(3000, () => console.log ("Servidor Corriendo")); 