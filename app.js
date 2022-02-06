const express = require("express");

const app = express();

app.listen(3000, () => console.log ("Servidor Corriendo"));

const path =require("path");

const publicPath = path.resolve(__dirname,"./public");

app.use (express.static(publicPath));

app.set("view engine", "ejs"); 

const rutasMain = require ("./routes/mainRoutes");

app.use('/', rutasMain);

router.get('/', mainContoller.index);

router.get('/register', mainContoller.register);

router.get ("/login", mainContoller.login);

app.get('/productCart', (req, res) => res.sendFile(path.resolve(__dirname, "src/views/productCart.html")));

app.get('/productDetail', (req, res) => res.sendFile(path.resolve(__dirname, "src/views/productDetail.html")));




