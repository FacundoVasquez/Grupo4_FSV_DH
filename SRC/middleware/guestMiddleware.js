function guestMiddleware(req, res, next) {
    
    if (req.session.userLogged != null){
        return res.redirect('/user/profile');
    }
    next();
}
module.exports = guestMiddleware;