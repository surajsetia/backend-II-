let users=[ {
    name:"Nitesh",
    age: 24,
    address:"Delhi"
}, 
    {
name:"Ritik",
age: 25,
address:"Faridabad"
    }    
]
const fs=require("fs");
fs.writeFileSync("../users.txt",JSON.stringify(users),function(err, data) {
    if (err) return console.log(err);
    console.log("users written!!");
});