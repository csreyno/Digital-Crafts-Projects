//ajax.js
const ajax = (url, callback, method='GET')=>{
    if(!url) return console.error("Request Required")
    if(!callback) return console.error("Callback Required")
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", evt=>{
        let req = evt.target;
        if(req.readyState !== 4) return;
        if(req.status === 200) return callback(req.response)
        callback("")
    })
    request.open(method,url)
    
    
    //Setting some headers...Don't sweat it right now
    //request.setRequestHeader("X-Requested-With","XMLHttpRequest");
    request.setRequestHeader("Access-Control-Allow-Origin","https://api.punkapi.com/v2/");
    
    request.setRequestHeader("Content-Type","application/json");
    request.setRequestHeader("Accept","application/json");
    // Use above for APIs in the future
    
    request.send()
    }


const root = document.querySelector("#root");

const makeCard = (beer)=>{
    let card = document.createElement("div")
    card.className = "card"
    let name = document.createElement("h3")
    name.className = "beer_name"
    name.innerText = `${beer.name}:`

    let tagLine = document.createElement("p")
    tagLine.innerText = beer.tagline
    tagLine.className = "tagline"

    let remove = document.createElement("button")
    remove.className = "removeButton"
    remove.innerText = "X"

    remove.addEventListener("click", (evt)=>{
        console.dir(evt.target)
        evt.target.parentNode.parentNode.removeChild(evt.target.parentNode)
    })
    card.append(name,tagLine,remove)
    root.append(card)
}

ajax("https://api.punkapi.com/v2/beers?page=2&per_page=10", (res)=>{
    let r = JSON.parse(res)
    // console.log(r.request)
    r.forEach((beer)=>{
        makeCard(beer)
    })
})


ajax("https://api.punkapi.com/v2/beers?page=2&per_page=10", (v)=>console.log(JSON.parse(v)))