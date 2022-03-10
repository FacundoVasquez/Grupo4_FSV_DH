//Encriptar contraseña
const bcryptjs = require("bcryptjs");

//Se requieren los módulos necesarios
const path = require("path");
const fs = require("fs");
const user = require("../models/user");
const express = require ("express");
const { validationResult } = require ("express-validator")

//Se definen las rutas hacia los JSONs
const usersPath = path.join(__dirname, "../data/usersDataBase.json");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
    register: (req, res) => {
        return res.render("register")
      },

    processRegister: (req, res) => {
     /* const resultValidation= validationResult(req);

      if (resultValidation.error.length > 0) {
        res.render ("register", {
          errors: resultValidation.mapped(), 
          oldData:req.body
        });
      }
      */
      let userToCreate = {
        ...req.body,
          password:bcryptjs.hashSync(req.body.password, 10),
        }

      user.create(userToCreate);
      return res.redirect ("/")
    },
  
      login: (req, res) => {
         return res.render("login")
      },

      /*store: (req,res) => {
              
        
        userToCreate.id = controller.asignarIdAUsuarioEnBaseAlUltimo();
            
        users.push(userToCreate);
  
        controller.guardarUsuario();
  
  
            return res.redirect("/");
  
      },
  
      guardarUsuario() {
        fs.writeFileSync(usersPath, JSON.stringify(users, null, 2))
      },
      
      asignarIdAUsuarioEnBaseAlUltimo: function () {
        return users[users.length - 1].id + 1;
      },
  */
     

}

module.exports = controller;