// We would like to create the following controllers for creating, updating or getting profiles. Include the routes for this ticket as well

// - CREATE

// - Given parameters passed in, create a profile.

// - UPDATE

// - Given an ID and new parameters, update the profile

// - GET

// - Given an ID, return profile with that ID

// - GET all

// - A list of profiles
const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");


exports.searchProfiles = asyncHandler(async (req, res, next) => {

  const profiles = await Profile.find({});

  res.status(200).json({ profiles: profiles });
});


exports.searchProfileById = asyncHandler(async (req, res, next) => {

  const profile = await Profile.findById(req.params.id).populate('user') //populate with reviews, messages and payment methods once those features are added
  // we don't want to show all props of the profile to anyone who searches thier ID so this will change based on the inputs
  if (!profile) {
    res.status(404);
    throw new Error("No profile found in search");
  }

  res.status(200).json({ profile: profile });
});

exports.updateProfile = asyncHandler(async (req, res, next) => {

  try {

    const profile = await Profile.findByIdUpdate(req.params.id, { ...req.body.profile }) //update props based on what was sent in the req body

    await profile.save();

    res.status(200).json({ profile: profile });
  } catch (e) {
    res.status(404).json({ message: e });
  }

});


exports.createProfile = asyncHandler(async (req, res, next) => {

  try {

    const profile = new Profile(req.body.profile)

    await profile.save();

    res.status(200).json({ profile: profile });
  } catch (e) {
    res.status(404).json({ message: e });
  }

});