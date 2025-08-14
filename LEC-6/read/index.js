const fs=require("fs");

fs.readFile("../demo.txt", function(err,data){
if (err) return console.log(err);
console.log(data);
})