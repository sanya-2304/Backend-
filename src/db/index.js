import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";


const PORT=process.env.PORT

const connectDb=async()=>{
  try{
   const connectInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
   console.log(`Mongodb connected! Db host: ${connectInstance.connection.host}`)
  }catch(err){
    console.error('mongodb connection error: ', err)
    process.exit(1)
  }
}

export default connectDb
