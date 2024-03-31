var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);

fs.appendFile('greeting.text','hi'+user.username +'!', ()=>{ console.log("File Created")});


const notes = require('./notes');
var age = notes.age
var result = notes.addNumber(age,18);
console.log(result);


var _ = require('lodash');
var data = ["person" , "person" , 1,1,2,3,4,2];
var filter = _.uniq(data);
console.log(filter);



