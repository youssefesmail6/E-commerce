
import express from "express"
import {  addUser,getAllUsers,getUserById,updateUser,deleteUser, updatePassword } from "./controller/user.controller.js";

const userRoutes=express.Router();

 userRoutes.post("/adduser", addUser)
 userRoutes.get("/getallusers",getAllUsers)
 userRoutes.get("/getuserbyid/:id",getUserById)
 userRoutes.patch("/updateuser/:id",updateUser)
 userRoutes.patch("/updatepassword/:id",updatePassword)
userRoutes.delete( "/deleteuser/:id",deleteUser)

// jobRoutes.get("/searchjobsbycompanyname",auth,isAuthorized([roles.Company_Hr,roles.user]),getJobsByCompanyName)
// jobRoutes.get("/FilteredJobs",auth,isAuthorized([roles.Company_Hr,roles.user]),validation (filteredJobsSchema),getFilteredJobs)
// jobRoutes.post("/applyToJob",auth,validation (applyToJobSchema),applyToJob)

export default userRoutes;