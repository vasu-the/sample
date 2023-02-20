const mongoose=require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://sample:12345678vasu@cluster0.fr3yddq.mongodb.net/test23?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error")
})