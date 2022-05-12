//Encriptar contraseña
const bcryptjs = require("bcryptjs");

//Se requieren los módulos necesarios
const path = require("path");
const fs = require("fs");
/*const user = require("../models/user");*/
const express = require ("express");
const { validationResult } = require("express-validator")
const { body } = require("express-validator");

//Se definen las rutas hacia los JSONs
const usersPath = path.join(__dirname, "../data/usersDataBase.json");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


//base de datos

const {User} = require("../../database/models")

const controller = { 
      register: (req, res) => {
        
        return res.render("register")
      },

      processRegister: async(req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.render("register", { errors: errors.errors, oldData:req.body});
            
        }else { 

                  User.create({
                  name: req.body.user_name,
                  email: req.body.email,
                  password: bcryptjs.hashSync(req.body.password, 10),
                })
                return res.redirect ("/user/login")
              }
            },
      edit: async(req, res) => {
        // Encontrar un usuario en base a su id
        // Pasarle a la vista los datos de este usuario
        // Buscar en array de usuarios
        // El elemento cuyo id sea el enviado por parámetros
        // find()
        // Accedo al id en req.params.id
        const idUser = req.params.id;
        const userToEdit = await User.findByPk(idUser);
        if (!userToEdit) {
          return res.send('USUARIO NO REGISTRADO')
        }
    
        return res.render('userEdit', {userToEdit})
      },
    
    
      // Update - Method to update
      update: async (req, res) => {
    
      await User.update({
        name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
          },
          {
            where:{
              user_id: req.params.id,
            }
          }),
    
           res.redirect('/user/login')
           },
    
      delete: async (req, res) => {
            await User.destroy({
              where:{
                user_id: req.params.id
              }
            }),
            res.redirect('/user/login')
        
          },
        
      login: (req, res)=>{
        return res.render('login');
      },

      loginProcess: async (req, res) =>{

        let userToLogin =  User.findOne({
            where: {email: req.body.email}
          })
            .then(() => {

            if(userToLogin){
              let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
              
              if(correctPassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin

                
              }
              return res.redirect('/user/profile');
            }
              else {
              return res.render('login', {
                errors: {
                  email:{
                    msg: 'las contraseñas no coinciden'
                  }
                }
              
              });
            
            }
          })
        },
              /*if(req.body.remember_user){
              res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60)*2})
               */
        
      profile: (req, res)=>{
        return res.render('userProfile', {
          user: req.session.userLogged
        });
      },
     
      logout: (req, res)=> {
        req.session.userLogged=null;
        res.cookie('userEmail', null, {maxAge:-1});
        req.session.destroy(/*()=> {
          req.session = null
          }*/);
        /*console.log(req.session.userLogged);*/
        return res.redirect('/');
      }
          
}

module.exports = controller;