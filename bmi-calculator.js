const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res){

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight/(height*height);
  res.send("your BMI is " + bmi);
})

app.listen(3000, function(){
  console.log("server is running on port 3000")
});

