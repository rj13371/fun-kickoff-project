
const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { searchProfiles,searchProfileById, updateProfile, createProfile } = require("../controllers/profile");

router.route("/profiles").get(searchProfiles);

router.route("/create_profile").post(protect, createProfile);

router.route("/:id").get(searchProfileById);

router.route("/:id/update_profile").put(protect, updateProfile);

module.exports = router;
