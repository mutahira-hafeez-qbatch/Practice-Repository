 const mongoose = require("mongoose");
 const validator = require("validator");
 const studentSchema = new mongoose.Schema({
      name:{
          type:String,
          required:true,
          minLength:3
      },
      email:{
          type:String,
          require:true,
          unique:[true,"Email already exist."],
          validate(value){
              if(!(validator.isEmail(value))){
                  throw new Error("Invalid email!")
              }
          }
      },
      phone:{
          type:String,
          minLength:11,
          maxLength:11,
          unique:true,
          required:true,
          validate(value){
            if(!(validator.isNumeric(value))){
                throw new Error("Invalid email!")
            }
        }
      },
      address:{
          type:String,
          required:true
      }
 })


 ///creating a new collection with

 const Student = new mongoose.model('Student',studentSchema);

//exporting collection

 module.exports=Student;