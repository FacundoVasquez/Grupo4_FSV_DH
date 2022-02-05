const express =require("express")

const app = express()

app.listen(3000, () => console.log ("Servidor Corriendo"))

const path =require ("path")

const publicPath =path.resolve(__dirname,"./public")

app.use (express.static(publicPath))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "src/views/index.html")));

app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, "src/views/register.html")));

app.get('/productCart', (req, res) => res.sendFile(path.resolve(__dirname, "src/views/productCart.html")));

app.get('/productDetail', (req, res) => res.sendFile(path.resolve(__dirname, "src/views/productDetail.html")));

app.get ("/login", function (req, res) {res.sendFile (path.resolve (__dirname, "src/views/login.html"))});

