import connectDb from "./db/index.js";
import dotenv from "dotenv"
dotenv.config()
const port=process.env.PORT;
import app from "./app.js";


connectDb().then(()=>app.listen(port, ()=>console.log(`Server running fine on ${port}`))).catch((err)=>console.log('mongodb connection failed'))

