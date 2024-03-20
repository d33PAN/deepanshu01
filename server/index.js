const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({
  origin:"*",
  methods: ["GET", "POST"]
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json)
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://gopal079:gopal079@cluster0.s2hxjxl.mongodb.net/assessmentDB?retryWrites=true&w=majority&appName=Cluster0")
const mongooseConnection = async ()=>{
  const res = await mongoose.connect("mongodb+srv://gopal079:gopal079@cluster0.s2hxjxl.mongodb.net/assessmentDB?retryWrites=true&w=majority&appName=Cluster0")
  console.log("MongoDb Connected!");
}
const User = require("./model/user.js");

app.get("/",(req,res)=>{
    res.send("Working");
});

app.post("/register",async(req,res)=>{
  console.log(req?.body);
  res.send("Sent");
})
app.post("/login",async(req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
          if(user){
              bcrypt.compare(password, user.password, async function(err, result) {
                  if(err){
                      res.status(401).send(err);
                  }
                  if(result){
                    try {
                        const resData = await User.findOne({ email: email }).select("-password");
                        const accessToken = jwt.sign({resData},process.env.SECRETKEY);
                          res.status(200).json(accessToken);
                        
                    } catch (error) {
                      res.send("Something went worng"); 
                    }
                  }
                  else{
                      res.status(403).send("Invalid username or password");
                  }
              });
          }else{
              res.status(404).send("Invalid username or password");
          }
        
    } catch (error) {
        
    }
})
mongooseConnection();
app.listen(3000,()=>{
    console.log("Server is running at port 3000");
})