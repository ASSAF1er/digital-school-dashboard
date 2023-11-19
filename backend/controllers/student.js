const Student=require('../models/student')

exports.addStudent =(req,res)=>{
    if(!req.body.firstName ||  !req.body.lastName || !req.body.sex || !req.body.dateOfBirth) {
        return res.status(401).json(req.body)
    }
    const studentObject=req.body
    
    const student = new Student(studentObject);
    student.save()
    .then(()=>res.status(200).json({message:'Eleve enregistré avec succès !'}))
    .catch((error)=> res.status(500).json(error))
}
exports.getAllStudents=(req,res)=>{
    Student.find()
        .then(students=>res.status(200).json(students))
        .catch(error=>res.status(500).json({error}))
}
exports.deleteOneStudent=(req,res)=>{
    Student.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({message:'étudiant supprimé avec succès !'}))
    .catch(()=>res.status(400).json({err:'une erreur s\'est produite'}));
}