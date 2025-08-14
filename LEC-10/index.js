const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const fs=require("fs");


/*app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get ("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
    });*/

app.post("/addusers", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.json ({
        username,
        password
    })

    let addusers= {
        username: username,
        password: password
    }

fs.writeFileSync("./submitted-data",JSON.stringify(addusers), function(err,data){
    if(err) return console.log(err);
    console.log("success!!");

})    

});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
})



