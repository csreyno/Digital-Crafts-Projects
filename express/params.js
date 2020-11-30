//https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Express/3-express-route-parameters.md


const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const port = 4430;

db = {
    posts:[
        {
            id:"001", 
            title:"Good Things", content:"Lorium ipsum"
        },
        {
            id:"002", 
            title:"Bad Things", content:"FooBar"
        }
    ],
    people:[
        {
            id:"p001", 
            name:"Clint"
        },
        {
            id:"p002", 
            name:"Anna"
        }
    ]
}

app.get("/api/post/:id", (req,res)=>{
    const {id} = req.params;
    /* same as above, but above is better
        const id = req.params.id
    */
    const foundPost = db.posts.find(post=>post.id == id)
    res.send(foundPost)
})

app.get("/api/:type", (req,res)=>{
    const {type} = req.params;
    res.send(db[type])
})

server.listen(port, ()=>console.log(`listening on port ${port}`));