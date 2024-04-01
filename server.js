// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greeting.text','hi'+user.username +'!', ()=>{ console.log("File Created")});


// const notes = require('./notes');
// var age = notes.age
// var result = notes.addNumber(age,18);
// console.log(result);


// var _ = require('lodash');
// var data = ["person" , "person" , 1,1,2,3,4,2];
// var filter = _.uniq(data);
// console.log(filter);


// const jsonString = {
//   "name": "John",
//   "age":12
// }

// const object = JSON.parse(jsonString);
// console.log(object);

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/chicken',(req,res)=>{
  res.send("Sure")
})

app.get('/idli',(req,res)=>{
  var type = {
    name:"rava idli",
    size:"12",
    is_sambhar:true
  }
  res.send(type)
})

app.post('/items',(req,res)=>{
  res.send("data showed")
})
app.listen(3000,()=>{
  console.log("Server Listening")
})




