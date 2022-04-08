const user = require('../models/user');
function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false; //variable para todas las vistas independiente del controlador
    
    let emailCookie = req.cookies.userEmail;//busco usuario en cookie
    let userFromCookie = user.findByField('email', emailCookie); //trae info de user
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

    if (req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged; //usuario logeado en variable local
    }
    
    next();
}
module.exports = userLoggedMiddleware;