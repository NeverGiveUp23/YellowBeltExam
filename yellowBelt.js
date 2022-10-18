var reverseCard = "/Reverse.png";
var wildCard = "/wild.jpeg";
var greenCard = "/greenUno.jpeg";
var unoCards = [greenCard, wildCard, reverseCard];



//Login & logout button //
function login(element){
  //creating an if statement for the login button //
  if(element.innerText == "Login"){
    element.innerText = "Logout";
  }
  else {
    element.innerText = "Login"
  }
// creating an if statement to change the profile picture when you click login/logout //
  var newProPic = document.querySelector("#profilePic");
  if(element.innerText == "Login"){
    newProPic.src = "/profilePic.webp";
  } else {
    newProPic.src = "Uno_card.webp"
  }
}

//Flip card button//
//  Uno flip card code //
// using if statement to go back and forth between images //
function display(element){
  if(element.innerText == "Flip Card"){
    element.innerText = "Flip Back Over";
  }
  else {
    element.innerText = "Flip Card"
  }
  //CP flip card if statement //
  // random cards //
  var randomUnoCard = Math.random();
  var diffCards = unoCards[Math.floor(randomUnoCard * unoCards.length)];
  // end of random cards formula //

  // if statement to switch to random cards //
  var flip = document.querySelector("#reverseUno");
  if(element.innerText == "Flip Card"){
    flip.src = "/UnoBack.png";
  }
  else {
    flip.src = diffCards;
  }

}
//User flip card choice //
function displayCard(element){
  if(element.innerText == "Flip Card"){
    element.innerText = "Flip Back Over";
  }
  else {
    element.innerText = "Flip Card"
  }

// start of random cards for user //
var randomUnoCard = Math.random();
  var diffCards = unoCards[Math.floor(randomUnoCard * unoCards.length)];
  var userFlip = document.querySelector("#card2");

  if(element.innerText == "Flip Card"){
    userFlip.src = "/UnoBack.png";
  }
  else {
    userFlip.src = diffCards;
  }
//if user card is = [0] in the array index and if it matches the random card picked for the CP//
  if(unoCards[0] === diffCards){
    alert("Correct!")
  } else {
    alert("Incorrect!")
  }
}

//User flip card 2 //
function displayCard2(element){
  if(element.innerText == "Flip Card"){
    element.innerText = "Flip Back Over";
  }
  else {
    element.innerText = "Flip Card"
  }


  var randomUnoCard = Math.random();
  var diffCards = unoCards[Math.floor(randomUnoCard * unoCards.length)];
  
  // 
  var userFlip2 = document.querySelector("#card3");
  if(element.innerText == "Flip Card"){
    userFlip2.src = "/UnoBack.png";
  }
  else {
    userFlip2.src = diffCards;
  }
if(unoCards[1] === diffCards){
  alert("Correct!")
} else {
alert("Incorrect!")
}

}


//user card 3//
function displayCard3(element){
  if(element.innerText == "Flip Card"){
    element.innerText = "Flip Back Over";
  }
  else {
    element.innerText = "Flip Card"
  }


  var randomUnoCard = Math.random();
  var diffCards = unoCards[Math.floor(randomUnoCard * unoCards.length)];



  var userFlip3 = document.querySelector("#card4");
  if(element.innerText == "Flip Card"){
    userFlip3.src = "/UnoBack.png";
  }
  else {
    userFlip3.src = diffCards;
  }

  if(unoCards[2] === diffCards){
    alert("Correct!")
  } else{
    alert("Incorrect!")
  }
}



