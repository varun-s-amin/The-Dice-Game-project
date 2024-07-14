function MyFunction()
{
    var randomNumber1 = Math.random();
  randomNumber1 = randomNumber1 * 6;
  randomNumber1 = Math.floor(randomNumber1);
  randomNumber1 = randomNumber1 + 1;

  var image = "/images/dice" + randomNumber1 + ".png";

  var i1 = document.querySelectorAll("img")[0];

  i1.setAttribute("src", image);




  var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2 = randomNumber2 + 1;

var image2 = "/images/dice" + randomNumber2 + ".png";
var i2 = document.querySelectorAll("img")[1];

  i2.setAttribute("src", image2);



if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏳️";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
}
  



