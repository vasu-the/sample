const mongoose=require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://mongodb:testDB23@myfirstdatabase.el4ju0f.mongodb.net/UserDB?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error")
})