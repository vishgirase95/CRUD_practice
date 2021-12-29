const { response } = require("express");
const express=require("express");
let app=express();
app.listen(3000,function(){
    console.log("port 3000 started")
});

app.get('/', function (req, res) {
   res.send('<h1>Hello ,vishal Girase </h1>')
  })

  app.get('/first', function (req, res) {
    res.send('hello first')
  })

  app.get('/second',function(req,res){
      res.send("Hello Second page here")
  })