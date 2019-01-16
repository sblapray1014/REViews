const passport = require("passport");
// Verify user is logged in
const requireLogin = require("../middlewares/requireLogin");
// Load Profile Model
const Profile = require("../models/Profile");

module.exports = app => {
  // Fetch Profile if exists
  app.get("/api/profile", requireLogin, async (req, res) => {
    Profile.findOne({
      user: req.user.id
    })
      .populate("user")
      .then(profile => {
        if (!profile) {
          return res.status(404).json("There is not a profile for this user");
        }
        res.json(profile);
      });
    console.log("Did I get here?");
  });
};

//Create Profile
app.post("/api/profile", (req, res) => {
  const profileFields = {};

  profileFields.user = req.user.id;
  profileFields.google = req.body.google;
  profileFields.zillow = req.body.zillow;
  profileFields.trulia = req.body.trulia;
  profileFields.facebook = req.body.facebook;

  Profile.findOne({ user: req.user.id }).then(profile => {
    if (profile) {
      Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      ).then(profile => res.json(profile));
    } else {
      new Profile(profileFields).save().then(profile => res.json(profile));
    }
  });
});
