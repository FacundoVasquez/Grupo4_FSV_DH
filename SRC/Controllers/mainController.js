//Se requieren los módulos necesarios
const path = require("path");
const fs = require("fs");
const {Product} = require("../../database/models");
const db = require('../../database/models')
const Op = db.Sequelize.Op;


//Se definen las rutas hacia los JSONs
const usersPath = path.join(__dirname, "../data/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
  index: async (req, res) => {
    const destacados = await Product.findAll({
      where:{
        features : 'true'
      }
    })

     return res.render("index",{ destacados : destacados})
    
    },

  
  contacto: (req, res) => {
      return res.render("contacto")
     }, 
  
  quienesSomos: (req, res) => {
    return res.render("quienesSomos")
   }, 
    
    productDetail: (req, res) => {
      return res.render("productDetail")
    },//Controlador de la vista detalle producto

}

module.exports = controller;
