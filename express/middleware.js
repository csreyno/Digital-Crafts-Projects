const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const port = 4430;


const timeLogger = (req,res, next)=>{
    let requestTime = new Date()
    console.log("A request came in at "+requestTime)

    req.reqestTime = requestTime
    next()
}

app.get("/", timeLogger, (req,res)=>{
    console.log(req.requestTime)
    res.send(data)
})