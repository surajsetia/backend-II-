const fs=require("fs");

fs.writeFileSync("../demo.txt","G26 hello", function(err,data){
    if(err) return console.log(err);
    console.log("success!!");

})        

