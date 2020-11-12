import {ajax} from "./modules/ajax.js"
const corsFix = "http://localhost:8080/" //only use if needed
const root = document.querySelector("#root") //id in html doc

const makeCard = (person)=>{
    let card = document.createElement("div")
    let name = document.createElement("h3")
    name.innerText = `${person.name.first} ${person.name.last}`  

    let phone = document.createElement("p")
    phone.innerText = person.phone
    phone.className= "phone"

    let remove = document.createElement("button")
    remove.innerText = "X"

    remove.addEventListener("click", (evt)=>{
        console.dir(evt.target)
        evt.target.parentNode.parentNode.removeChild(evt.target.parentNode)
    })
    card.append(name,phone,remove)
    root.append(card)
}

ajax(corsFix+'https://randomuser.me/api/', (res)=>{
    let r = JSON.parse(res)
    r.results.forEach((person)=>{
        makeCard(person)
    })
})