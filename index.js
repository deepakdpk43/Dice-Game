// i need a variable that stores the randomness
var randomNumber1=Math.floor(Math.random()*6)+1; // 1 to 6 since math,random gives random decimal number from 0 to 1
var randomNumber2=Math.floor(Math.random()*6)+1; // 1 to 6

var randomDiceImage1="dice"+randomNumber1+".png";
var randomDiceImage2="dice"+randomNumber2+".png"; // dice1.png - dice6.png

var randomSource1="images/"+ randomDiceImage1;
var randomSource2="images/"+ randomDiceImage2;

var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];

img1.setAttribute("src",randomSource1);
img2.setAttribute("src",randomSource2);

// player 1 wins
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else
{
  document.querySelector("h1").innerHTML="draw!";
}
