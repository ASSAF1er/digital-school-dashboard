const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signup = (req, res, next) => {
    bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                password: hash,
                email: req.body.email,
                username: req.body.username,
                createDate: req.body.createDate,
                tel: req.body.tel,
                status: req.body.status
            })
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch((error) => res.status(400).json({ error }))
        })
        .catch((error) => res.status(500).json({ error }))
}
exports.getAllUsers = (req, res) => {
    User.find()
        .then((users) => res.status(200).json(users))
        .catch((error) => res.status(500).json({ error }))
}
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(401).json({ message: 'paire login/mot de passe incorrecte !' })
            }
            bcrypt
                .compare(req.body.password, user.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(401).json({ message: 'paire login/mot de passe incorrecte !' })
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign({ userId: user._id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' })
                    })
                })
                .catch((error) => res.status(500).json({ error }))
        })
        .catch((error) => res.status(500).json({ error }))
}
