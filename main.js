var cards = [
  { name: "2_of_clubs", img: "2_of_clubs.png", value: 2 },
  { name: "2_of_diamonds", img: "2_of_diamonds.png", value: 2 },
  { name: "2_of_hearts", img: "2_of_hearts.png", value: 2 },
  { name: "2_of_spades", img: "2_of_spades.png", value: 2 },
  { name: "3_of_clubs", img: "3_of_clubs.png", value: 3 },
  { name: "3_of_diamonds", img: "3_of_diamonds.png", value: 3 },
  { name: "3_of_hearts", img: "3_of_hearts.png", value: 3 },
  { name: "3_of_spades", img: "3_of_spades.png", value: 3 },
  { name: "4_of_clubs", img: "4_of_clubs.png", value: 4 },
  { name: "4_of_diamonds", img: "4_of_diamonds.png", value: 4 },
  { name: "4_of_hearts", img: "4_of_hearts.png", value: 4 },
  { name: "4_of_spades", img: "4_of_spades.png", value: 4 },
  { name: "5_of_clubs", img: "5_of_clubs.png", value: 5 },
  { name: "5_of_diamonds", img: "5_of_diamonds.png", value: 5 },
  { name: "5_of_hearts", img: "5_of_hearts.png", value: 5 },
  { name: "5_of_spades", img: "5_of_spades.png", value: 5 },
  { name: "6_of_clubs", img: "6_of_clubs.png", value: 6 },
  { name: "6_of_diamonds", img: "6_of_diamonds.png", value: 6 },
  { name: "6_of_hearts", img: "6_of_hearts.png", value: 6 },
  { name: "6_of_spades", img: "6_of_spades.png", value: 6 },
  { name: "7_of_clubs", img: "7_of_clubs.png", value: 7 },
  { name: "7_of_diamonds", img: "7_of_diamonds.png", value: 7 },
  { name: "7_of_hearts", img: "7_of_hearts.png", value: 7 },
  { name: "7_of_spades", img: "7_of_spades.png", value: 7 },
  { name: "8_of_clubs", img: "8_of_clubs.png", value: 8 },
  { name: "8_of_diamonds", img: "8_of_diamonds.png", value: 8 },
  { name: "4_of_hearts", img: "8_of_hearts.png", value: 8 },
  { name: "8_of_spades", img: "8_of_spades.png", value: 8 },
  { name: "9_of_clubs", img: "9_of_clubs.png", value: 9 },
  { name: "9_of_diamonds", img: "9_of_diamonds.png", value: 9 },
  { name: "9_of_hearts", img: "9_of_hearts.png", value: 9 },
  { name: "9_of_spades", img: "9_of_spades.png", value: 9 },
  { name: "10_of_clubs", img: "10_of_clubs.png", value: 10 },
  { name: "10_of_diamonds", img: "10_of_diamonds.png", value: 10 },
  { name: "10_of_hearts", img: "10_of_hearts.png", value: 10 },
  { name: "10_of_spades", img: "10_of_spades.png", value: 10 }
];

var buttonStart = document.getElementById("start");
var buttonAdd = document.getElementById("add");
var buttonStop = document.getElementById("stop");
var blackgame = new BlackGame(cards);
var startCardCroupier = [];
var startCardPlayer = [];
var remainingCard = [...cards];

function printCroupierStart() {
  blackgame.random(cards);
  var card1 =
    `<div id="croupierFirst" class="cardCroupier card" value=` +
    cards[0].value +
    ` data-card-name= "` +
    cards[0].name +
    `">`;
  var card2 =
    `<div class="cardCroupier card" value=` +
    cards[1].value +
    ` style="background: url(cards/` +
    cards[1].img +
    `)" data-card-name= "` +
    cards[1].name +
    `">`;
  document.querySelector("#cardCroupierFront").innerHTML = card1;
  document.querySelector("#cardCroupierFront").innerHTML += card2;
  startCardCroupier.push(blackgame.cards[0], blackgame.cards[1]);
  remainingCard.splice(0, 2);
}

function printPlayerStart() {
  blackgame.random(remainingCard);
  var card1 =
    `<div class="cardPlayer card" value=` +
    remainingCard[0].value +
    ` style="background: url(cards/` +
    remainingCard[0].img +
    `)" data-card-name= "` +
    remainingCard[0].name +
    `">`;
  var card2 =
    `<div class="cardPlayer card" value=` +
    remainingCard[1].value +
    ` style="background: url(cards/` +
    remainingCard[1].img +
    `)" data-card-name= "` +
    remainingCard[1].name +
    `">`;
  document.querySelector("#cardPlayerFront").innerHTML = card1;
  document.querySelector("#cardPlayerFront").innerHTML += card2;
  startCardPlayer.push(remainingCard[0], remainingCard[1]);
  remainingCard.splice(0, 2);
}

function addPlayersCard() {
  blackgame.random(remainingCard);
  var card =
    `<div class="cardPlayer" value=` +
    remainingCard[0].value +
    ` style="background: url(cards/` +
    remainingCard[0].img +
    `)" data-card-name= "` +
    remainingCard[0].name +
    `">`;
  document
    .querySelector("#cardPlayerFront")
    .insertAdjacentHTML("beforeend", card);
  startCardPlayer.push(remainingCard[0]);
  remainingCard.splice(0, 1);
}

function addCroupierCard() {
  blackgame.random(remainingCard);
  var card =
    `<div class="cardCroupier" value=` +
    remainingCard[0].value +
    ` style="background: url(cards/` +
    remainingCard[0].img +
    `)" data-card-name= "` +
    remainingCard[0].name +
    `">`;
  document
    .querySelector("#cardCroupierFront")
    .insertAdjacentHTML("beforeend", card);
  startCardCroupier.push(remainingCard[0]);
  remainingCard.splice(0, 1);
  var first =
    `<div class="cardCroupier card" style="background: url(cards/` +
    startCardCroupier[0].img +
    `)" value=` +
    startCardCroupier[0].value +
    ` data-card-name= "` +
    startCardCroupier[0].name +
    `">`;
  document.getElementById("croupierFirst").innerHTML = first;
}

function croupierLoop() {
  var i = setInterval(() => {
    if (countCroupierScore() < 16) {
      return countCroupierScore(), addCroupierCard();
    } else {
      return clearInterval(i);
    }
  }, 1);
}

function playerCheckScore() {
  var a = countPlayerScore();
  if (blackgame.playerLoose(a) == "lost") {
    return finish();
  }
}

function endOfGame() {
  var a = countCroupierScore();
  var b = countPlayerScore();
  var c = blackgame.getWinner(a, b);
}

function countCroupierScore() {
  var res = blackgame.getScore(blackgame.getValue(startCardCroupier));
  document.querySelector("#scoreC").innerHTML = "he's score : " + res;
  return res;
}

function countPlayerScore() {
  var res = blackgame.getScore(blackgame.getValue(startCardPlayer));
  document.querySelector("#scoreP").innerHTML = "your score : " + res;
  return res;
}

function setResetBtn() {
  buttonStart.innerHTML = "RESET";
  buttonStart.id = "reset";
}

function reset() {
  document.querySelector("#cardPlayerFront").innerHTML = "";
  document.querySelector("#cardCroupierFront").innerHTML = "";
  document.querySelector("#scoreP").innerHTML = "";
  document.querySelector("#scoreC").innerHTML = "";
  startCardCroupier = [];
  startCardPlayer = [];
  remainingCard = [...cards];
  buttonStart.innerHTML = "START";
  buttonStart.id = "start";
  document.querySelector(
    "#popup"
  ).innerHTML = `<div id="popupText" class="popupText"></div>`;
}

function finish() {
  setTimeout(() => {
    var res = blackgame.getWinner(countPlayerScore(), countCroupierScore());
    var popup =
      `<div class = "popupContainer" id="popupContainer"><div id="popup" class="popup">` +
      res +
      ` </div><div class="button"><button id="finish">START</button></div></div>`;
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").innerHTML = popup;
    var buttonFinish = document.getElementById("finish");
    buttonFinish.addEventListener("click", function() {
      return resetGame();
    });
  }, 2000);
}

function resetGame() {
  return location.reload();
}

buttonStart.addEventListener("click", function() {
  if (buttonStart.id === "start") {
    return (
      printCroupierStart(),
      printPlayerStart(),
      countPlayerScore(),
      setResetBtn()
    );
  } else return reset();
});

buttonAdd.addEventListener("click", function() {
  return addPlayersCard(), countPlayerScore(), playerCheckScore();
});

buttonStop.addEventListener("click", function() {
  return countCroupierScore(), croupierLoop(), finish();
});
