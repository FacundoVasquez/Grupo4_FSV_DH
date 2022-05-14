const express = require("express")
const { validationResult } = require("express-validator");
const { check, body } = require("express-validator")
const {User} = require("../../database/models")


const emailValidation = function (req, res, next) {

    let errores = validationResult(req)
    User.findOne({
        where:{email:req.body.email}

    })
    .then((result)=>{
        
    if (result) {
    
        /*const errorEmail = [{"value":"","msg":"Usuario Registrado","param":"email","location":"body", }];*/
        console.log(result)
        return res.render ("register", {errores:{email:{ msg: "Usuario Registrado"}}, old:req.body});

     }else{next()};

     
    })
    
    
}


module.exports = emailValidation;