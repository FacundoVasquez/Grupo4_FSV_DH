const express =require("express")

const app = express()

app.listen(3000, () => console.log ("Servidor Corriendo"))

const path =require ("path")

const publicPath =path.resolve(__dirname,"./public")

app.use (express.static(publicPath))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'index.html')));

app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'register.html')));
app.get('/productCart', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'productCart.html')));
app.get('/productCart', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'productCart.html')));

app.get('/productDetail', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'productDetail.html')));

app.get ("/login", function (req, res) {res.sendFile (path.resolve (__dirname, "./views/login.html"))});

app.get ("/login2", function (req, res) {res.sendFile (path.resolve (__dirname, "./views/login2.html"))});

