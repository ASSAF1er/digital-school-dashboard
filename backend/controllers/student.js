const Student = require('../models/student')
const nodemailer = require('nodemailer')

exports.addStudent = (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.sex || !req.body.dateOfBirth) {
        return res.status(401).json(req.body)
    }
    const studentObject = req.body

    const student = new Student(studentObject)
    student
        .save()
        .then(() => res.status(200).json({ message: 'Eleve enregistré avec succès !' }))
        .catch((error) => res.status(500).json(error))
}
exports.getAllStudents = (req, res) => {
    Student.find()
        .then((students) => res.status(200).json(students))
        .catch((error) => res.status(500).json({ error }))
}
exports.getLatestStudents = (req, res) => {
    Student.find()
        .sort({ $natural: -1 })
        .limit(3)
        .then((students) => res.status(200).json(students))
        .catch((error) => res.status(500).json({ error }))
}
exports.deleteOneStudent = async (req, res) => {
    Student.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'étudiant supprimé avec succès !' }))
        .catch(() => res.status(400).json({ err: "une erreur s'est produite" }))
}
exports.updateOneStudent = async (req, res) => {
    Student.updateOne({ _id: req.params.id }, { $set: req.body }, { returnNewDocument: true })
        .then((students) => res.status(200).json({ students }))
        .catch((err) => res.status(500).json({ err }))
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587, // Port SMTP
    secure: false,
    auth: {
        user: 'assaffart@gmail.com',
        pass: 'kmix hkdt hjua mfpn'
    }
})

exports.sendMailToStudent = async (req, res) => {
    const receiver = await Student.findOne({ _id: req.params.id })
    const subject = req.body.subject
    const text = req.body.text

    const mailOptions = {
        from: 'assaffart@gmail.com',
        to: receiver.email,
        subject: subject,
        text: text
    }

    transporter
        .sendMail(mailOptions)
        .then((message) => res.status(200).json({ message }))
        .catch((err) => res.status(500).json({ err }))
}
