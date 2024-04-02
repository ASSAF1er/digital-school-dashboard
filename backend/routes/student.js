const express = require('express')
const router = express.Router()

const studentCtrl = require('../controllers/student')

router.post('/', studentCtrl.addStudent)
router.get('/', studentCtrl.getAllStudents)
router.get('/latest', studentCtrl.getLatestStudents)
router.delete('/:id', studentCtrl.deleteOneStudent)
router.put('/:id', studentCtrl.updateOneStudent)
router.post('/:id', studentCtrl.sendMailToStudent)

module.exports = router
