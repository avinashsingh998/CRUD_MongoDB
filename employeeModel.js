const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({

   
      name:{
        type:String,
        require:true
      },

      email:{
        type:String,
        require:true,
        unique: true
      },

      salary:{
        type:Number,
        require:true
      },

      role:{
        type:String,
        require:false
      },

      colleague:{
        type:[mongoose.SchemaType.ObjectId],
        require:false
      }

})

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;