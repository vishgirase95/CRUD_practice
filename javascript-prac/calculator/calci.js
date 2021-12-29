const express = require("express");
const app = express();

const parser = require("body-parser");
app.use(parser.urlencoded({ extended: true }));
app.listen(3000, function () {
  console.log("3000 server is running");
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/calculator.html");
});
app.post("/", function (request, response) {
  let num1 = Number(request.body.num1);
  let num2 = Number(request.body.num2);
  let sum = num1 + num2;
  response.send("The addition is : " + sum);
});

app.get("/calculator", function (request, response) {
  response.send("the answer is ");
});

app.get("/BMI", function (request, response) {
  response.sendFile(__dirname + "/BMIcalci.html");
});

app.post("/BMI", function (request, response) {
    let w=Number(request.body.weight);
    let h= Number(request.body.height);
    let BMI=w/(h*h);
  response.send("The BMI is : " +BMI);
});
