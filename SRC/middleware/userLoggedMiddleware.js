const user = require('../models/user');
function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false; //variable para todas las vistas independiente del controlador
    
    let emailCookie = req.cookies.userEmail;//busco usuario en cookie
    let userFromCookie = user.findByEmail(emailCookie); //trae info de user
    
    if(userFromCookie != null){
        req.session.userLogged = userFromCookie;
    }

    if ((req.session != null) && (req.session.userLogged != null)){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged; //usuario logeado en variable local
    }
    
    next();
}
module.exports = userLoggedMiddleware;