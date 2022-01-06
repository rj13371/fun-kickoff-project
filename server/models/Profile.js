const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    availability: [{
        from: Date,
        to: Date
    }],
    gender: { type: String, required: true },
    profilePicture: { type: String, required: false },
    phoneNumber: [{ type: Number, required: true }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: ('Review')
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Profile', profileSchema)