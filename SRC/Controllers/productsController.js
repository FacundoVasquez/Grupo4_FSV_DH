//Se requieren los módulos necesarios
const path = require("path");
const fs = require("fs");

//Se definen las rutas hacia los JSONs
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: (req, res) => {
        return res.render("products")
    },
    
    detail: (req, res) => {
        const productIdToFind = req.params.id;
        const product = products.find( (p) => p.id == productIdToFind);
        return res.render("productDetail", {product});
    },
    
    store: (req, res) => {
        return res.render("productCreate")
    },

    productCart: (req, res) => {
        return res.render ("productCart")
    },
    
};

module.exports = controller;
