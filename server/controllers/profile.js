const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

exports.returnAllProfiles = asyncHandler(async (req, res, next) => {

  const profiles = await Profile.find({});

  res.status(200).json({ profiles });
});


exports.searchProfileById = asyncHandler(async (req, res, next) => {

  const profile = await Profile.findById(req.params.id).populate('user') 

  if (!profile) {
    res.status(404);
    throw new Error("No profile found in search");
  }

  res.status(200).json({ profile });
});

exports.updateProfile = asyncHandler(async (req, res, next) => {

  try {

    const profile = await Profile.findByIdAndUpdate(req.params.id, { ...req.body.profile })

    await profile.save();

    res.status(200).json({ profile });
  } catch (e) {
    res.status(400).json({ message: e });
  }

});


exports.createProfile = asyncHandler(async (req, res, next) => {

  try {

    const profile = new Profile(req.body.profile)

    await profile.save();

    res.status(200).json({ profile });
  } catch (e) {
    res.status(400).json({ message: e });
  }

});