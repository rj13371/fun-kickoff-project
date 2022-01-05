
const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { searchProfiles,searchProfileById, updateProfile, createProfile } = require("../controllers/profile");

router.route("/profiles").get(searchProfiles);

router.route("/create_profile").post(protect, createProfile);

router.route("/:id").get(searchProfileById); // im not sure if we are using this route to display profiles to a user once they are logged
//in and see their own profile, or just to see other users profiles, its not clear to me, so if we want to display
//all props of the profile to any user when they search, then we obviously do not want to send sensitive details of the persons profile
//we can add protect middleware if we only want to show profile details to the logged in user, but for now there is no protect auth

router.route("/:id/update_profile").put(protect, updateProfile);

module.exports = router;
