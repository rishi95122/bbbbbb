import express from "express"

import authRoutes from "./routes/auth.mjs"
import tasksRoutes from "./routes/tasks.mjs"
import cors from "cors"
const app=express();
app.use(express.json())
app.use(express())
app.use(cors())
app.use("/api/auth",authRoutes)
app.use("/api/tasks",tasksRoutes)
app.listen(8800,(req,res)=>{
    console.log("connected")
})