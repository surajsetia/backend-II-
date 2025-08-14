//mongodb return and saves data in BSON Binary JSON
//mongoose is odm, to connect our server with mongodb
const express = require("express")
const mongoose = require("mongoose")
const app = express();
const Blogs = require("./model/blog")
const Users = require("./model/user")
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.post("/blogs",async (req, res) => {
    let { title, body, userId } = req.body
    let userExist = await Users.findById(userId);
    if (userExist) {
    // console.log(title, body);
    // res.send("Got it")
        let newBlog = new Blogs({
            title: title,
            body: body,
            date: Date.now(),
            userId: userId
        })
        await newBlog.save()
        userExist.blogs.push(newBlog._id)
        await userExist.save();
        res.json({
            success: true,
            data: newBlog,
            message: "Blog added successfully"
        })
    }
})

app.post("/users", async(req, res)=>{
    let {email, username, password} = req.body

    let newUser = new Users({
        email: email,
        username: username,
        password: password
    })
    await newUser.save();
    res.json({
        success: true,
        data: newUser,
        message: "User added successfully"
    })
})

app.get("/blogs", async (req, res)=>{
    let allblog = await Blogs.find();  // returns all data
    res.json({
        success: true,
        data: allblog
    })
})

app.get("/blogs/:id", async (req, res)=>{
    let {id} = req.params
    let blog = await Blogs.findOne({_id:id});
    res.json({
        success: true,
        data: blog
    })
})

app.get("/users", async(req, res)=>{
    let allUsers = await Users.find();
    res.json({
        success: true,
        data: allUsers
    })
})

app.get("/users/:id", async(req, res)=>{
    let {id} = req.params
    let userExist = await Users.findOne({_id:id}).populate("blogs");
    if (userExist) {
        res.json({
            success: true,
            data: userExist
        })
    }
})

app.delete("/blogs/:blogId",  async (req, res) => {
    let { blogId } = req.params;
    let { userId } = req.body;
    let blogExist = await Blogs.findById(blogId);
    if (!blogExist) return res.json({
        success: false,
        message: "Blog does not exist"
    })
    if (blogExist.userId != userId) return res.json({
        success: false,
        message: "You are not allowed to delete this blog"
    })
    await Blogs.findByIdAndDelete(blogId);
    let userExist = await Users.findById(userId);
    let blog = userExist.blogs.filter((id) => id != blogId)
    userExist.blogs = blog
    await userExist.save();
    res.json({
        success: true,
        message: "Blog deleted successfully",
        data: userExist
    })
})

app.put("/blogupdate/:blogId", async (req, res) => {
    let { blogId } = req.params;
    let { userId, title, body } = req.body;
    let blogExist = await Blogs.findById(blogId);
    if (!blogExist) return res.json({
        success: false,
        message: "Blog does not exist"
    })
    if (blogExist.userId != userId) return res.json({
        success: false,
        message: "You are not allowed to delete this blog"
    })

    let updateData = {};
    if (title) updateData.title = title;
    if (body) updateData.body = body;

    let updatedBlog = await Blogs.findByIdAndUpdate(blogId, { $set: updateData }, { new: true, runValidators: true });

    res.json({
        success: true,
        message: "Blog updated successfully",
        data: updatedBlog
    });
});

app.listen(4445, () => {
    console.log("Server started")
})

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => console.log("Connected!"));

// make user Schema, email, username, password
// add user route, all user get, single user get /users