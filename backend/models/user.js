const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    tel: { type: Number, required: true },
    status: { type: String, required: true, enum: ['admin', 'comptable', 'super admin'] },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Veuillez fournir une adresse email valide ']
    },
    password: { type: String, required: true },
    createDate: { type: String, required: true }
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema)
