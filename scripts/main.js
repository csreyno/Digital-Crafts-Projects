window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
})
let player = document.querySelector("#player-hand");
let dealer = document.querySelector("#dealer-hand");

let button = document.querySelector("#deal-button");
let hitButton = document.querySelector("#hit-button");
let standButton = document.querySelector("#stand-button");

let deck = [
  {name: '2c', value: 2, imgurl: "images/2_of_clubs.png"},
  {name: '3c', value: 3, imgurl: "images/3_of_clubs.png"},
  {name: '4c', value: 4, imgurl: "images/4_of_clubs.png"},
  {name: '5c', value: 5, imgurl: "images/5_of_clubs.png"},
  {name: '6c', value: 6, imgurl: "images/6_of_clubs.png"},
  {name: '7c', value: 7, imgurl: "images/7_of_clubs.png"},
  {name: '8c', value: 8, imgurl: "images/8_of_clubs.png"},
  {name: '9c', value: 9, imgurl: "images/9_of_clubs.png"},
  {name: '10c', value: 10, imgurl: "images/10_of_clubs.png"},
  {name: 'jc', value: 10, imgurl: "images/jack_of_clubs.png"},
  {name: 'qc', value: 10, imgurl: "images/queen_of_clubs.png"},
  {name: 'kc', value: 10, imgurl: "images/king_of_clubs.png"},
  {name: 'ac', value: 11, imgurl: "images/ace_of_clubs.png"},
  {name: '2d', value: 2, imgurl: "images/2_of_diamonds.png"},
  {name: '3d', value: 3, imgurl: "images/3_of_diamonds.png"},
  {name: '4d', value: 4, imgurl: "images/4_of_diamonds.png"},
  {name: '5d', value: 5, imgurl: "images/5_of_diamonds.png"},
  {name: '6d', value: 6, imgurl: "images/6_of_diamonds.png"},
  {name: '7d', value: 7, imgurl: "images/7_of_diamonds.png"},
  {name: '8d', value: 8, imgurl: "images/8_of_diamonds.png"},
  {name: '9d', value: 9, imgurl: "images/9_of_diamonds.png"},
  {name: '10d', value: 10, imgurl: "images/10_of_diamonds.png"},
  {name: 'jd', value: 10, imgurl: "images/jack_of_diamonds.png"},
  {name: 'qd', value: 10, imgurl: "images/queen_of_diamonds.png"},
  {name: 'kd', value: 10, imgurl: "images/king_of_diamonds.png"},
  {name: 'ad', value: 11, imgurl: "images/ace_of_diamonds.png"},
  {name: '2d', value: 2, imgurl: "images/2_of_hearts.png"},
  {name: '3d', value: 3, imgurl: "images/3_of_hearts.png"},
  {name: '4d', value: 4, imgurl: "images/4_of_hearts.png"},
  {name: '5d', value: 5, imgurl: "images/5_of_hearts.png"},
  {name: '6d', value: 6, imgurl: "images/6_of_hearts.png"},
  {name: '7d', value: 7, imgurl: "images/7_of_hearts.png"},
  {name: '8d', value: 8, imgurl: "images/8_of_hearts.png"},
  {name: '9d', value: 9, imgurl: "images/9_of_hearts.png"},
  {name: '10d', value: 10, imgurl: "images/10_of_hearts.png"},
  {name: 'jd', value: 10, imgurl: "images/jack_of_hearts.png"},
  {name: 'qd', value: 10, imgurl: "images/queen_of_hearts.png"},
  {name: 'kd', value: 10, imgurl: "images/king_of_hearts.png"},
  {name: 'ad', value: 11, imgurl: "images/ace_of_hearts.png"},
  {name: '2d', value: 2, imgurl: "images/2_of_spades.png"},
  {name: '3d', value: 3, imgurl: "images/3_of_spades.png"},
  {name: '4d', value: 4, imgurl: "images/4_of_spades.png"},
  {name: '5d', value: 5, imgurl: "images/5_of_spades.png"},
  {name: '6d', value: 6, imgurl: "images/6_of_spades.png"},
  {name: '7d', value: 7, imgurl: "images/7_of_spades.png"},
  {name: '8d', value: 8, imgurl: "images/8_of_spades.png"},
  {name: '9d', value: 9, imgurl: "images/9_of_spades.png"},
  {name: '10d', value: 10, imgurl: "images/10_of_spades.png"},
  {name: 'jd', value: 10, imgurl: "images/jack_of_spades.png"},
  {name: 'qd', value: 10, imgurl: "images/queen_of_spades.png"},
  {name: 'kd', value: 10, imgurl: "images/king_of_spades.png"},
  {name: 'ad', value: 11, imgurl: "images/ace_of_spades.png"},
]

let playerArr = []    //push player card count to this array
let dealerArr = []    //push dealer card count to this array

const deal = function(){
  for(let i = 0; i < 2; i++){
    let img = document.createElement("img");
    img.setAttribute("src", deck[0].imgurl);
    player.append(img);
    playerArr.push(deck[0].value);
    console.log(playerArr);
  let playerSum = playerArr.reduce(function(a, b){  //sum of player hand
    return a + b;
  }, 0);
  console.log('player sum is: ' + playerSum);
  }
  for(let i = 0; i < 2; i++){
    let img = document.createElement("img");
    img.setAttribute("src", deck[51].imgurl);
    dealer.append(img);
    dealerArr.push(deck[51].value);
    console.log(dealerArr);
    console.log('deal was fired');
  let dealerSum = dealerArr.reduce(function(a, b){  //sum of dealer hand
    return a + b;
  }, 0);
  console.log('dealer sum is: ' + dealerSum);
  }
  button.removeEventListener("click", deal);
  button.style.backgroundColor = 'black';
  button.style.color = 'black';
}

//let i  = to sum of playerArr;  i <= 21 ; i++   //also needs conditional for if playerArr sum > 21 "Bust"
const hit = function(){
  for(let i = 0; i <= 0; i++ ){    
    let img = document.createElement("img");
    img.setAttribute("src", deck[0].imgurl);
    player.append(img);
    playerArr.push(deck[0].value);
    console.log(playerArr);  
  }
}

//need to add remove event listener when clicking stand button;
//hits as long as i < sum of playerArr or == 21 //also needs conditional for if dealerArr sum > 21 "Dealer Bust You Win"//also if dealerArr > sumPlayerArr & <= 21 "You Lose, Dealer Wins"
const stand = function(){
  for(let i = 0; i < 1; i++ ){    
    let img = document.createElement("img");
    img.setAttribute("src", deck[11].imgurl);
    dealer.append(img);
    dealerArr.push(deck[11].value);
    console.log(dealerArr);  
  }
}

button.addEventListener("click", deal)
hitButton.addEventListener("click", hit)
standButton.addEventListener("click", stand)
