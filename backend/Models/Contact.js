const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({

    nom : {
        type : String,
        required : true
    },
    numero : {
        type : String,
        required : true
    },
}, { timestamps : true })

module.exports = mongoose.model('contacts' , ContactSchema)