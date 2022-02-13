const express = require("express");

const app = express();

const path =require("path");

const publicPath = path.resolve(__dirname,"../public");

app.use (express.static(publicPath));
app.use('/', mainRoutes);
app.use ((req, res,next) => { res.status(404).render ("not-found")});


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs"); 

const mainRoutes = require("./routes/mainRoutes");

app.listen(3000, () => console.log ("Servidor Corriendo"));


