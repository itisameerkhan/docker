import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb connection successfull");
        
    } catch(e) {
        console.log("error during mongoose");
        console.log(e)
    }
}

export default  connectDB;