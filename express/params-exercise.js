
const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const port = 4430;

let people = require("./people.json")

const serveContent = (title, people)=>`
<!DOCTYPE html>
<html> 
    <head> 
        <title>${title}</title>
    </head>
    <body>
        <h1>${title}</h1>
        <div>${people}</div>
    </body>
</html>
`;

const serveHome = (req,res)=>{
    res.send(serveContent("Home"))
}
app.get("/", serveHome)

// app.get("/people", (req,res)=>{
//     res.send(serveContent("People", people))
// })

//send entire array
app.get("/api/people", (req,res)=>{
    res.send(people)
})

// searches array for a word match
app.get("api/people/:search", (req, res)=>{
    const{search} = req.params;
    let results = people.filter(person=>{
        return JSON.stringify(person).includes(search)
    })
    res.send(results)
})

//narrow down to gender to put this in url for example - http://localhost:4430/api/people/gender/male
app.get("/api/people/gender/:gender", (req,res)=>{
    console.log(req.params)
    const {gender} = req.params;
    let results = people.filter(person=>person.gender == gender)
    res.send(results)
})

//ex: http://localhost:4430/api/people/email/pry.shylyrd@example.com
app.get("/api/people/email/:email", (req,res)=>{
    console.log(req.params)
    const {email} = req.params;
    let results = people.find(person=>person.email == email)
    res.send(results)
})

// app.get("/gender", (req,res)=>{
//     res.send(serveContent("Gender", ))
// })

// app.get("/api/:type/:id", (req,res)=>{
//     const {type,id} = req.params;
//     if(!db.hasOwnProperty(type)) return res.send(null)
//     foundItem = db[type].find(item=>item.id = id);
//     res.send({type,foundItem})
//     //same as above
//     //res.send({type:type, foundItem:foundItem})
// })

server.listen(port, ()=>console.log(`listening on port ${port}`));