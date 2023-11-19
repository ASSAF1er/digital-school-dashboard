const express=require('express')
const router=express.Router()

const studentCtrl=require('../controllers/student')

router.post('/',studentCtrl.addStudent)
router.get('/',studentCtrl.getAllStudents)
router.delete('/:id',studentCtrl.deleteOneStudent)

module.exports=router;