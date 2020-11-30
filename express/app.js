const http = require("http");
const express = require("express");
const fs = require("fs");

const app = express();
const server = http.createServer(app);

const sendFavicon = (req,res)=>{
    fs.readFile("/favicon.ico",(err,data)=>{
        if(err) return res.send(err);
        res.send(data)
    } )
}

const serveContent = (title)=>`
<!DOCTYPE html>
<html> 
    <head> 
        <title>${title}</title>
    </head>
    <body>
        <h1>${title}</h1>
    </body>
</html>
`;

const _404Content = `
  <!DOCTYPE html>
  <html> 
      <head> 
          <title>An Error you have found</title>
      </head>
      <body>
          <h1>404</h1>
          <blockquote>"An Error you have found" - Yoda
          </blockquote>
      </body>
  </html>
  `;
  const send404  = (req,res)=>{
      res.status(404);
      res.send(_404Content)
  }

  //favicon route
app.get("./favicon.ico", sendFavicon)

//Home route, did this way since both go to same destination
const serveHome = (req,res)=>{
    res.send(serveContent("Home"))
}
app.get("/", serveHome)
app.get("/home", serveHome)

//about, inserts "about" in the "serveContent" html document created above
app.get("/about", (req,res)=>{
    res.send(serveContent("About"))
})
//contact
app.get("/contact", (req,res)=>{
    res.send(serveContent("Contact"))
})

app.get("*", send404);

// app.get("*", (req,res)=>{
//     console.log("a request has been received!")
//     // res.writeHead(200)
//     // res.end("Hello Express!")
//     res.send("Hello Express!") //the above res.writehead and res.end can be combined and used as "res.send"
// })

const port = 4430
server.listen(port, ()=>console.log(`listening on port ${port}`));