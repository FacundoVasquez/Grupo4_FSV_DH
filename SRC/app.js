const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname,"../public");

// Rutas
const mainRoutes = require("./routes/mainRoutes");
app.use('/', mainRoutes);

app.use ((req, res,next) => {res.status(404).render("not-found")});
app.use (express.json());

//Configuración
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs"); 
app.use (express.static(publicPath));
app.use (express.urlencoded ({extended:false}));

//Servidor
app.listen(3000, () => console.log ("Servidor Corriendo"));


