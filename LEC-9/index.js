// make a server using express

const express = require("express");
const app = express();
app.use(express.json());
const fs=require("fs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/data", (req, res) => {
  res.send("Data received!");
});

app.post("/submit", (req, res) => {
    const { data } = req.body;
    res.send(`Data submitted: ${data}`);

    fs.writeFile("./submitted-data",data, function(err,data){
        if(err) return console.log(err);
        console.log("success!!");
    
    })        
    
});

let allUser=[]; 

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
 allUser.push({ name, email, password });
 
  if (!name || !email || !password) {
    return res.send("Please provide name, email, and password");
  }

  
  const user = { name, email, password };

  fs.writeFile("./user.txt", JSON.stringify(allUser), (err) => {
    if (err) {
      return res.send("Error saving user");
    }
    res.send("User registered successfully");
  });
});


app.listen(3000, function() {
    console.log("Server is running on port 3000");
})

