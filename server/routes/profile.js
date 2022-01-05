// We would like to create the following controllers for creating, updating or getting profiles. Include the routes for this ticket as well

// - CREATE

// - Given parameters passed in, create a profile.

// - UPDATE

// - Given an ID and new parameters, update the profile

// - GET

// - Given an ID, return profile with that ID

// - GET all

// - A list of profiles

const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { searchProfiles } = require("../controllers/profile");

router.route("/profiles").get(searchProfiles);

module.exports = router;
