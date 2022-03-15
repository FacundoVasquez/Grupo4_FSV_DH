//Encriptar contraseña
const bcryptjs = require("bcryptjs");

//Se requieren los módulos necesarios
const path = require("path");
const fs = require("fs");
const user = require("../models/user");
const express = require ("express");
const { validationResult } = require ("express-validator")
const { body } = require("express-validator");

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
        return res.render ("register", {
          errors: resultValidation.mapped(), 
          oldData:req.body
        });
      }
      */

      let errors = validationResult(req);

        if (!errors.isEmpty()) {
        
            return res.render("register", { errors: errors.errors, old:req.body})

        }else { 

            return res.render("register", { data: req.body}); 
 
        }
      

      let userByEmail = user.findByField ("email", req.body.email); 
      
      if (userByEmail) {
        return res.render ("register", {
        errors: {
          email:{
            msg:"Este usuario ya se encuentra registrado"
          }
        },
        oldData:req.body    
      });
      }

      let userToCreate = {
        ...req.body,
          password:bcryptjs.hashSync(req.body.password, 10),
          password1:bcryptjs.hashSync(req.body.password1, 10),
        }

      let userCreated = user.create(userToCreate);
      return res.redirect ("/user/login")
    },
  
      login: (req, res) => {
         return res.render("login")
      },

      store: (req, res) => {
        req.session.user = user
        return res.redirect("/")
      },
          

}

module.exports = controller;