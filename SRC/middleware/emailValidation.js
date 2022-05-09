
const express = require("express")
const { check } = require('express-validator');
const { body } = require('express-validator');
const {User} = require("../../database/models")


const emailValidation = function (req, res, next) {
    
    let userByEmail = User.findAll({
        where:{email:req.body.email}
    });
    
    if (userByEmail === undefined) {
    
    const errorEmail = [{"value":"","message":"Usuario Registrado","param":"email","location":"body", }];
    
    return res.render ("register", {errors: errorEmail, message: 'user_email_UNIQUE must be unique'});
    }
    next()
}


module.exports = emailValidation;