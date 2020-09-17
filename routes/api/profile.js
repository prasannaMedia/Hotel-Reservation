const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("config");
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const { check, validationResult } = require("express-validator/check");

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).send("no profile");
    }
    return res.json(profile);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});
router.post("/",auth,
  async (req, res) => {

    const {
      checkin,
      checkout,
      rooms,
      children,
      adult,
      phone
    } = req.body;

    const profileField = {};
    profileField.user = req.user.id;
    if (checkin) profileField.checkin = checkin;
    if (checkout) profileField.checkout = checkout;
    if (rooms) profileField.rooms = rooms;
    if (children) profileField.children = children;
    if (adult) profileField.adult = adult;
    if (phone) profileField.phone = phone;
    // res.send("done");
    try {
      let profile = await Profile.findOne({ user: req.user.id });
      console.log("1");
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileField },
          { new: "true" }
        );
        await profile.save();
        return res.json(profile);
      }
      console.log("in create");
      profile = new Profile(profileField);
      await profile.save();
      return res.json(profile);
    } catch (err) {
      res.status(500).send("server error");
    }
  }
);
router.get("/", async (req, res) => {
  try {
    const profile = await Profile.find().populate("user", ["name", "avatar"]);
    await res.json(profile);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("server error");
  }
});

//route to get profile by user_id
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).send("no profile");
    }
    return res.json(profile);
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
});

//route to delete profile by id
router.delete("/", auth, async (req, res) => {
  try {
    await Profile.findOneAndRemove({ user: req.user.id });
    
    return res.json({ msg: "account deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

//add experience
router.post(
  "/experience",
  [
    auth,
    [
      check("title", "title required").not().isEmpty(),
      check("company", "company required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array });
    }
    const { title, company, location, from, to } = req.body;
    const newexp = {
      title,
      company,
      location,
      from,
      to,
    };
    try {
      console.log("1");
      const profile = await Profile.findOne({ user: req.user.id });
      profile.experience.unshift(newexp);
      await profile.save();
      console.log(2);
      return res.json(profile);
    } catch (err) {
      res.status(500).send("server error");
    }
  }
);

//delete experience

router.delete("/experience/:exp_id", auth, async (req, res) => {
  try {
    const profile = Profile.findOne({ user: req.user.id });
    const removeindex = profile.experience
      .map((item) => item.id)
      .indexOf(req.params.exp_id);
    profile.splice(removeindex, 1);
    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(500).send("server error");
  }
});


module.exports = router;
