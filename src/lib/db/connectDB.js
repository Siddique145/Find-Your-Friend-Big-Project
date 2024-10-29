import mongoose from "mongoose";


export async function connectDB(){
  try{
    let connection = await mongoose.connect(process.env.MONGODB_URI)
    console.info("MongoDB Connected He successfully")
  }
  catch(err){
    console.log("err in the connection is me he ",err)
  }
}