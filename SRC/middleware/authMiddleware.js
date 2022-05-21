function authMiddleware(req, res, next) {
    if (!req.userLogged){
        return res.redirect('/user/login');
    }
    next();
}
module.exports = authMiddleware;