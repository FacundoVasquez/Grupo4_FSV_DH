function guestMiddleware(req, res, next) {
    console.log(req.session.userLogged)
    if (req.session.userLogged != null){
        return res.redirect('/user/profile');
    }
    next();
}
module.exports = guestMiddleware;