const express = require("express");
const { redirect } = require("express/lib/response");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const publicPath = path.resolve(__dirname,"../public");

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
app.use(function(req,res,next){
    res.status(404);
    return res.render("notFound")}
);

app.use(express.json()); 

//Servidor
app.listen(3000, () => console.log ("Servidor Corriendo")); 