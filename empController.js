const Employee = require("./employeeModel");


function addEmp(req, res){
    try{
     const {name, email, salary, role, colleague} = req.body;
 
     Employee.create({
         name:name,
         email:email,
         salary, salary,
         role:role,
         colleague:colleague
     }).then((obj)=>{
         res.status(201).json(obj);
 
     }).catch((err)=>{
         res.status(500).json({"message":err})
     })
    }
 
    catch(err){
     console.log("Try catch error ", err);
         res.status(500).json({"message":err})
    }
 }



 function updateEmp(req, res){
    try{
     const {id, name, email, salary, role, colleague} = req.body;
        console.log(colleague, role, id, name)
     Employee.findByIdAndUpdate(id, {
        name:name,
        salary:salary,
        role:role,
        colleague:colleague,
        email:email
     }) .then((obj)=>{
         res.status(200).json(obj);
 
     }).catch((err)=>{
         res.status(500).json({"message":err})
     })
    }
 
    catch(err){
         res.status(500).json({"message":err})
    }
 }


 function getAllEmp(req, res){
   try{
    Employee.find().then(data=>{
        res.status(200).json(data)
    }).catch((err)=>{
        res.status(500).json({"message":err})
    })
   }catch(err){
    res.status(500).json({"message":err})
}
 }


 function getEmpById(req, res){

    try{
        const id = req.params.id;

        Employee.findById(id).then(obj=>{
            res.status(200).json(obj);
        }).catch((err)=>{
            res.status(500).json({"message":err})
        })
       }catch(err){
        res.status(500).json({"message":err})
    }

 }



 function deleteEmpById(req, res){

    try{
        const id = req.params.id;

        Employee.findByIdAndDelete(id).then(obj=>{
            res.status(200).json({"message":"Object deleted successfully", "deletedObject":obj})
        }).catch((err)=>{
            res.status(500).json({"message":err})
        })
       }catch(err){
        res.status(500).json({"message":err})
    }

 }





module.exports = {addEmp, updateEmp, getAllEmp, getEmpById, deleteEmpById}