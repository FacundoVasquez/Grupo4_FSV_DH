//Se requieren los módulos necesarios
const path = require("path");
const fs = require("fs");

/*
//Se definen las rutas hacia los JSONs
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
*/

const controller = {
    index: (req, res) => {
     return res.render("index")
    },
        
    register: (req, res) => {
      return res.render("register")
    },

    login: (req, res) => {
       return res.render("login")
    },

    userCreate: (req,res) => {
      /*
      const userToCreate = req.body;
      return res.send(userToCreate)
      */
     return console.log("Hola")
    },
     
}

module.exports = controller;
