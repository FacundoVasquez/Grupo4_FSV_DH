//Se requieren los módulos necesarios
const path = require("path");
const fs = require("fs");


//Se definen las rutas hacia los JSONs
const usersPath = path.join(__dirname, "../data/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
  index: (req, res) => {
     return res.render("index")
    },
  
  contacto: (req, res) => {
      return res.render("contacto")
     }, 
  
  quienesSomos: (req, res) => {
    return res.render("quienesSomos")
   }, 

  register: (req, res) => {
      return res.render("register")
    },

    login: (req, res) => {
       return res.render("login")
    },
    productDetail: (req, res) => {
      return res.render("productDetail")
    },//Controlador de la vista detalle producto

    store: (req,res) => {
      
      const userToCreate = req.body;
           
      userToCreate.id = controller.asignarIdAUsuarioEnBaseAlUltimo();
		  
      users.push(userToCreate);

		  controller.guardarUsuario();


		  return res.redirect("/product/cart");

    },

    guardarUsuario() {
      fs.writeFileSync(usersPath, JSON.stringify(users, null, 2))
    },
    asignarIdAUsuarioEnBaseAlUltimo: function () {
      return users[users.length - 1].id + 1;
    },

    
     
}

module.exports = controller;
