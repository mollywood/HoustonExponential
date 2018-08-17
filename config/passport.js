const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const Sequelize = require("sequelize");
const db = require("../models/index");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      db.User.findById(jwt_payload.id)
        .then(user => {
          if(user){
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => {console.log(err)});
    })
  );

  // Functions needed for passport LinkedInStrategy
  passport.initialize();
  passport.session();
  passport.serializeUser((user, done) => {
    done(null, user)
  });
  passport.deserializeUser((user, done) => {
    done(null, user)
  });
  passport.use(
    new LinkedInStrategy(
      {
        clientID: "78umadn462runs",
        clientSecret: "JzPt9cNwIpvkSQZ1",
        callbackURL: "http://127.0.0.1:8000/users/linkedin/callback",
        scope: ["r_emailaddress", "r_basicprofile"]
      },
      (accessToken, refreshToken, profile, done) => {
        // asynchronous verification, for effect...
        process.nextTick(function() {
          db.User.findOrCreate({
            where: {
              email: profile._json.emailAddress
            },
            defaults: {
              firstName: profile._json.firstName,
              lastName: profile._json.lastName,
              linkedinprofile: profile._json.publicProfileUrl
            }
          });
          return done(null, profile);
        });
      }
    )
  );
};
