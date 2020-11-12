
let beers = "https://api.punkapi.com/v2/beers"
results = beers.filter

let results = [];
let searchField = "food_pairing";
let searchVal = "ingredient searched"; //need to pass ingredient searched into here
for (let i=0 ; i < obj.beers.length ; i++){
    if (obj.beers[i][searchField] == searchVal) {
        results.push(obj.beers[i]);
        console.log(results)
    }
}

let button = document.querySelector("search-input")
button.addEventListener("click", () => {
    
}
)


// //example button search information//
// <body>
//     <input id="lat" name="lat" placeholder="lat">
//     <input id="lon" name="lon" placeholder="lon">
//     <button>Check</button>
//     <script src="ajax.js"></script>
//     <script>
//         let button = document.querySelector("button")
//         button.addEventListener("click", () => {
//             let lon = document.querySelector("#lon").value;
//             let lat = document.querySelector("#lat").value;
//             //Only if you have your own cors-anywhere
//             ajax("http://localhost:8080/" + `https://www.metaweather.com/api/location/search/?lattlong=${lat}, ${lon}`, (r) => {
//                 let people = JSON.parse(r)
//                 console.log(r)
//             })
//         })
//     </script>
// </body>