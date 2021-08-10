const express = require("express");
require("./db/conn")

const Student = require("./models/students")
const app= express();
const port = process.env.PORT || 3000;

/*
app.get("/",(req,res)=>{
   res.send("Welcome to our Application."); 
})*/

app.use(express.json());

// app.post("/student",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//        res.status(201).send(user);
//     }).catch((error)=>{
//         res.status(400 ).send(error); 
//     });
//     //res.send("Hello from Our Side");  
// })


app.post("/students",async(req,res)=>{
    try{
        console.log(req.body);
        const user = new Student(req.body);
        const result = await user.save();
        res.status(201).send(result);
     
    }catch(error){
        res.status(401).send(error);
    }
     

})


app.get("/students",async(req,res)=>{
    try{
         const getData= await Student.find();
         res.send(getData);
    }catch(error){ {
        res.send(error);
    }}
})


app.get("/students/:id",async(req,res)=>{
           try{
                const _id = req.params.id;
                const resultID=await Student.findById(_id);
                res.status(201).send(resultID); 
           }catch(error){
                 res.status(400).send(errro);
           }
})


// app.delete("/students/:id",async(req,res)=>{
//     try{
//           const _id = req.params.id;
//           const delID=await Student.findByIdAndDelete(_id);
//           res.status(201).send(delID);
//     }catch(error){
//            res.status(400).send(error);
//     }
// })


app.post("/studentm",async(req,res)=>{
    try{
          const data = req.body._id1.id1;
          console.log(data);
          const delID=await Student.dele(_id);
          res.status(201).send(delID);
    }catch(error){
           res.status(400).send(error);
    }
})

app.listen(port, ()=>{
    console.log(`connection established at:  ${port}`);
})
