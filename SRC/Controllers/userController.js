//Encriptar contraseña
const bcryptjs = require("bcryptjs");

//Se requieren los módulos necesarios
const path = require("path");
const fs = require("fs");
const user = require("../models/user");
const express = require ("express");
const { validationResult } = require("express-validator")
const { body } = require("express-validator");

//Se definen las rutas hacia los JSONs
// const usersPath = path.join(__dirname, "../data/usersDataBase.json");
// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


//base de datos

const {Users} = require("../../database/models");
const User = require("../../database/models/User");

const controller = { 
      register: (req, res) => {
        
        return res.render("register")
      },

      processRegister: async(req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.render("register", { errors: errors.errors, old: req.body});
            
        }else if (req.body.img  === undefined){
          Users.create({
            name: req.body.user_name,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            img: 'avatar.jpeg',
          })
          return res.redirect ("/user/login")

        }  else { 

                  Users.create({
                  name: req.body.user_name,
                  email: req.body.email,
                  password: bcryptjs.hashSync(req.body.password, 10),
                  img: req.file.filename,
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
        const userToEdit = await Users.findByPk(idUser);
        if (!userToEdit) {
          return res.send('USUARIO NO REGISTRADO')
        }
    
        return res.render('userEdit', {userToEdit})
      },
    
    
      // Update - Method to update
      update: async (req, res) => {
      if (req.body.img  === undefined) {      
          await Users.update({
            name: req.body.user_name,
            email: req.body.email,      
              },
              {
                where:{
                  user_id: req.params.id,
                }
              });
              req.session.userLogged=null;
              req.session.destroy();
              res.render('login')
      }else{
           await Users.update({
              name: req.body.user_name,
              email: req.body.email,
              img: req.file.filename,
                },
                {
                  where:{
                    user_id: req.params.id,
                  }
                });
                req.session.userLogged=null;
                req.session.destroy();

                res.render('login')
      };
    },
    
      delete: async (req, res) => {
            await Users.destroy({
              where:{
                user_id: req.params.id
              }
            }),
            res.redirect('/')
        
          },
        
      login: (req, res)=>{
        return res.render('login');
      },

      loginProcess: (req, res) =>{

        Users.findOne({
          where: {email: req.body.email} 
          })
          // console.log(req.body.email)
            .then((usuario) => {
              
              console.log(usuario);

              if(!usuario){
                // console.log(usuario);
                return res.send('USUARIO NO REGISTRADO')
              };

              let correctPassword = bcryptjs.compareSync(req.body.password, usuario.password);
              // console.log(correctPassword);
              if(correctPassword){
                delete usuario.password;
                req.session.userLogged = usuario;

              return res.redirect('/');
            }
              else {
              return res.render('login', {
                errors: {
                  email:{
                    msg: 'las contraseñas no coinciden'
                  }
                }
              })
              }
          
              })
      },
              /*if(req.body.remember_user){
              res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60)*2})
               */
        
      profile: (req, res)=>{
        // console.log(req.session.userLogged);
        // const user = locals.userLogged;

        return res.render('userProfile');
      },
     
      logout: (req, res)=> {
        req.session.userLogged=null;
        res.cookie('userEmail', null, {maxAge:-1});
        req.session.destroy();
        /*console.log(req.session.userLogged);*/
        return res.redirect('/');
      }
          
}

module.exports = controller;