const express = require('express')
const app = express();
const userRouter = require('./user/users.router')
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.use("/users",userRouter)

//Not found handler
app.use((req,res,next)=>{
    next({
        status:404, message:`Not found: ${req.originalUrl}.`
    })
})

//Error handler
app.use((err, req, res, next)=>{
    console.error(err);
    const {status=500, message = "Something went wrong!"}= err;
    res.status(status).json({error:message})
})

module.exports = app;