const express = require("express");

const app = express();

const path =require("path");

const publicPath = path.resolve(__dirname,"../public");
console.log(publicPath)

app.use (express.static(publicPath));

app.set("view engine", "ejs"); 

const mainRoutes = require("./routes/mainRoutes");

app.use('/', mainRoutes);

app.listen(3000, () => console.log ("Servidor Corriendo"));


