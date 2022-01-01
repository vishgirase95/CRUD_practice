const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://localhost:27017/NEWDATABASE", {
    useNewUrlParser: true
});

// mongoose.connect("mongodb://localhost:27017/NEWDATABASE").then(()=>{
//     console.log("sucesse");
// }).catch(()=>{
//     console.log("fail");
// })


const con = mongoose.connection;

con.on("open", function () {
    console.log("datbase is sucessfully set up");
});
// con.on("close", function () {
//     console.log("datbase is not set up");
// });

// con.on("error", function () {
//     console.log("datbase");
// });

const app=express();

const PlayerSchema=new mongoose.Schema({
    name:{
        type:String,
    
    },
    work:String
},
{timestamps:true})

const player=new mongoose.model("Player",PlayerSchema);
const player1=new player({
    name:"vishal",
    work:"engg"
});
app.use(express.json());
// player1.save();
app.get("/",async(requ,res)=>{
    const a=  await player.find()
res.send(a);
console.log("get request");

console.log(requ.body);

})
app.get("/:id",async(requ,res)=>{
    const a=  await player.findById(requ.params.id)
res.send(a);
console.log("get request");



})
app.delete("/:id", async(requ,res)=>{
    try {
        const a=  player.findByIdAndDelete(requ.params.id);
        res.send("removed");
        const b= await a.remove();
    
    
    } catch (error) {
     res.send(error);   
    }




})
app.post("/",async(req,res)=>{
 
    const player1=new player({
        name:req.body.name,
        work:req.body.work
    });
    const a= await player1.save();
    console.log(a.createdAt);
    res.send(a);

})
app.listen(9000,(e)=>{
    try {
        console.log("Running server: 3000");
        
    } catch (error) {
     console.log(error);   
    }
})