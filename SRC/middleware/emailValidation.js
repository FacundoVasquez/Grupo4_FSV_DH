
const express = require("express")
const { validationResult } = require("express-validator");
const { check, body } = require("express-validator")
const { User } = require("../../database/models")


const emailValidation = function (req, res, next) {

    let errores = validationResult(req)
    let userByEmail = User.findOne({
        where:{email:req.body.email}

    }).then((result)=>{
        
    if (userByEmail) {
    
        /*const errorEmail = [{"value":"","msg":"Usuario Registrado","param":"email","location":"body", }];*/
        
        return res.render ("register", {errores:{email:{ msg: "Usuario Registrado"}}, oldData:req.body});

     }
    })
    
    next()
}


module.exports = emailValidation;