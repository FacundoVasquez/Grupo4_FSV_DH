const {Users} = require("../../database/models");

function remember_user (req, res, next) {

if (typeof(req.cookies) !== undefined) {


if (req.cookies.remember_user != undefined && req.session.userLogged == undefined) {

    Users.findOne({
        where:{
            email: req.cookies.remember_user
        }
    })
    .then(usuario =>{
        req.session.userLogged = usuario
    })
    
}
}
next();

}

module.exports = remember_user