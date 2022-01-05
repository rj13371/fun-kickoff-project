const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    first_name: {type: String, required:true },
    last_name: {type: String, required:true },
    description: {type: String, required:true },
    location: {type: String, required:true },
    availability: [{
        from: Date,
        to: Date,
        required:true
    }],
    gender: {type: String, required:true },
    profile_picture: {type: String, required:false },
    phone_number: [{type: Number, required:true }],
    payment_methods: [{
        card_type: String,
        card_number: String, //encrypt later with bcrypt, do not store without encryption
        card_expiration_date: String, //encrypt later with bcrypt, do not store without encryption
        card_security_pin: Number, //encrypt later with bcrypt, do not store without encryption
        required:true
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref:('Message')
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref:('Review')
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Profile', profileSchema)