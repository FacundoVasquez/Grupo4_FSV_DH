const express =require("express")

const app = express()

app.listen(3000, () => console.log ("Servidor Corriendo"))

const path =require ("path")

const publicPath =path.resolve(__dirname,"./public")

app.use (express.static(publicPath))
