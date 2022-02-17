const express = require("express");
const { redirect } = require("express/lib/response");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname,"../public");

//Configuración
app.set('views', path.join(__dirname, 'Views'));
app.set("view engine", "ejs"); 
app.use(express.static(publicPath));
app.use(express.urlencoded ({extended:false}));

// Rutas
const mainRouter = require("./router/mainRouter");
app.use('/', mainRouter);
const productsRouter = require("./router/productsRouter");
app.use("/productDetail", productsRouter)

app.use(function(req,res,next){
    res.status(404);
    return res.render("notFound")}
);

app.use(express.json()); 

//Servidor
app.listen(3000, () => console.log ("Servidor Corriendo")); 