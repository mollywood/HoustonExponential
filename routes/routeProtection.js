module.exports = {
  validateUserLogin: function (req,res,next) {
    
    console.log(req.session, 'fghjkkl');
    if(req.session && req.session.user) {
      next()
    } else {
        res.redirect('/users/login')
    }
  }
}
