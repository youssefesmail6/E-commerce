import"dotenv/config.js"
import express from "express"
import {dbConnection}from "./db/connection.js"
import { allRoutes } from "./src/modules/routes.js";
import { AppError } from "./src/utils/AppError.js";
const app=express()
const port =3000
app.use(express.json())
app.use("/uploads",express.static("uploads"))
dbConnection()
allRoutes(app)

app.use("*",(req,res,next)=>{
  next(new AppError("Url not found",404))
})
app.use((err, req, res, next) => {
    console.error(err)
    res.status(err.statusCode).json({message:err.message,stack:err.stack})
  })
  
app.get('/',(req,res)=>res.send('hello'))
app.listen(port,()=> console.log("app listening on port 3000"))
