const mongoose=require('mongoose')

const studentSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String, required:true},
    sex:{type:String, required:true},
    dateOfBirth:{type:String,required:true},
    tel1:{type:Number,required:true},
    tel2:{type:Number,required:false},
    email:{type:String,required:true},
    quater:{type:String,required:true},
    schoolLevel:{type:String, required:true},
    training:{type:String,required:true},
    dateBegin:{type:String, required:true},
    dateEnd:{type:String, required:true},
    amount:{type:Number, required:true},
    advance:{type:Number, required:true},
    rest:{type:Number, required:true}


});

module.exports= mongoose.model('Student',studentSchema)