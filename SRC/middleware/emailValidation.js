const express = require("express")
const { validationResult } = require("express-validator");
const { check, body } = require("express-validator")
const {Users} = require("../../database/models")


const emailValidation = function (req, res, next) {

    let errors = validationResult(req)
    //Se puede partir la validación de errores

    Users.findOne({
        where:{email:req.body.email}

    })
    .then((result)=>{
        
    if (result) {
    
        /*const errorEmail = [{"value":"","msg":"Usuario Registrado","param":"email","location":"body", }];*/
        //console.log(result)
        return res.render ("register", {errors:[{msg:"e-Mail ya existe"}], old:req.body});

     }else{next()};

     
    })
    
    
}


module.exports = emailValidation;