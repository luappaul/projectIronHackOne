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
  { name: "8_of_hearts", img: "8_of_hearts.png", value: 8 },
  { name: "8_of_spades", img: "8_of_spades.png", value: 8 },
  { name: "9_of_clubs", img: "9_of_clubs.png", value: 9 },
  { name: "9_of_diamonds", img: "9_of_diamonds.png", value: 9 },
  { name: "9_of_hearts", img: "9_of_hearts.png", value: 9 },
  { name: "9_of_spades", img: "9_of_spades.png", value: 9 },
  { name: "10_of_clubs", img: "10_of_clubs.png", value: 10 },
  { name: "10_of_diamonds", img: "10_of_diamonds.png", value: 10 },
  { name: "10_of_hearts", img: "10_of_hearts.png", value: 10 },
  { name: "10_of_spades", img: "10_of_spades.png", value: 10 },
  { name: "jack_of_clubs", img: "jack_of_clubs.png", value: 10 },
  { name: "jack_of_diamonds", img: "jack_of_diamonds.png", value: 10 },
  { name: "jack_of_hearts", img: "jack_of_hearts.png", value: 10 },
  { name: "jack_of_spades", img: "jack_of_spades.png", value: 10 },
  { name: "king_of_clubs", img: "king_of_clubs.png", value: 10 },
  { name: "king_of_diamonds", img: "king_of_diamonds.png", value: 10 },
  { name: "king_of_hearts", img: "king_of_hearts.png", value: 10 },
  { name: "king_of_spades", img: "king_of_spades.png", value: 10 },
  { name: "queen_of_clubs", img: "queen_of_clubs.png", value: 10 },
  { name: "queen_of_diamonds", img: "queen_of_diamonds.png", value: 10 },
  { name: "queen_of_hearts", img: "queen_of_hearts.png", value: 10 },
  { name: "queen_of_spades", img: "queen_of_spades.png", value: 10 }
];

var buttonStart = document.getElementById("start");
var buttonAdd = document.getElementById("add");
var buttonStop = document.getElementById("stop");
var buttonFinish = document.getElementById("end");
var buttonAbout = document.getElementById("about");
var blackgame = new BlackGame(cards);
var startCardCroupier = [];
var startCardPlayer = [];
var remainingCard = [...cards];
var wallet = 100;
var bet = 0;

function printModalBet() {
  setTimeout(() => {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
      printWalletBet();
    };
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        printWalletBet();
      }
    };
  }, 1);
}

function printModalEnd() {
  var modal = document.getElementById("myModal2");
  var span = document.getElementsByClassName("close")[1];
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function printModalAbout() {
  var modal = document.getElementById("modalAbout");
  var span = document.getElementsByClassName("close")[2];
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function printWalletBet() {
  betUpdate();

  var bet = document.getElementById("inputBet").value;
  document.getElementById("bet").innerHTML =
    `<div class="amount" id="betAmount">` + bet + ` $</div>`;
  document.getElementById("wallet").innerHTML =
    `<div class="amount" id="walletAmount">` + Number(wallet) + ` $</div>`;
}

function betUpdate() {
  wallet = wallet - document.getElementById("inputBet").value;
  bet = Number(document.getElementById("inputBet").value);
}

function printWalletFirst() {
  document.getElementById("wallet").innerHTML =
    `<div class="amount" id="walletAmount">` + wallet + ` $</div>`;
}

function printCroupierStart() {
  blackgame.random(cards);
  var card1 =
    `<div id="croupierFirst"><div style = "background-size: contain; background-image: url(./img/téléchargement.jpg)" class="cardCroupier card" value=` +
    cards[0].value +
    ` data-card-name= "` +
    cards[0].name +
    `"></div>`;
  var card2 =
    `<div id="croupierSec" class="cardCroupier card" value=` +
    cards[1].value +
    ` style="background: url(cards/` +
    cards[1].img +
    `); background-size: contain" data-card-name= "` +
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
    `); background-size: contain" data-card-name= "` +
    remainingCard[0].name +
    `">`;
  var card2 =
    `<div class="cardPlayer card" value=` +
    remainingCard[1].value +
    ` style="background: url(cards/` +
    remainingCard[1].img +
    `); background-size: contain" data-card-name= "` +
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
    `); background-size: contain" data-card-name= "` +
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
    `); background-size: contain" data-card-name= "` +
    remainingCard[0].name +
    `">`;
  document
    .querySelector("#cardCroupierFront")
    .insertAdjacentHTML("beforeend", card);
  startCardCroupier.push(remainingCard[0]);
  remainingCard.splice(0, 1);
}

function discoverFirst() {
  document.getElementById("croupierFirst").innerHTML = "";
  var first =
    `<div class="cardCroupier card" style="background: url(cards/` +
    startCardCroupier[0].img +
    `); background-size: contain" value=` +
    startCardCroupier[0].value +
    ` data-card-name= "` +
    startCardCroupier[0].name +
    `">`;

  document
    .getElementById("croupierSec")
    .insertAdjacentHTML("beforebegin", first);
}

function croupierLoop() {
  var i = setInterval(() => {
    if (countCroupierScore() < 16) {
      return addCroupierCard(), countCroupierScore();
    } else {
      return clearInterval(i);
    }
  }, 1);
}

function playerCheckScore() {
  var a = countPlayerScore();
  if (blackgame.playerLoose(a) == "lost" && wallet < 0) {
    return finish();
  } else if (blackgame.playerLoose(a) == "lost") {
    return (
      countCroupierScore(),
      croupierLoop(),
      discoverFirst(),
      disabledStopButton(),
      setStartBtn(),
      reloadGame()
    );
  }
}

function countCroupierScore() {
  var res = blackgame.getScore(blackgame.getValue(startCardCroupier));
  document.querySelector("#scoreC").innerHTML = res;
  document.querySelector(
    "#dealerS"
  ).innerHTML = `<img src="./img/dealerScore.png" alt="yourScore" id="yourScore">`;
  return res;
}

function countPlayerScore() {
  var res = blackgame.getScore(blackgame.getValue(startCardPlayer));
  document.querySelector("#scoreP").innerHTML = res;
  document.querySelector(
    "#yourS"
  ).innerHTML = `<img src="./img/yourScore.png" alt="yourScore" id="yourScore">`;
  return res;
}

function printVs() {
  document.getElementById("vs").innerHTML = "VS";
}

function endOfGame() {
  var a = countCroupierScore();
  var b = countPlayerScore();
  var c = blackgame.getWinner(a, b);
}

function setAddBtn() {
  buttonStart.innerHTML = "ADD";
  buttonStart.id = "add";
}

function setStartBtn() {
  buttonStart.innerHTML = "START";
  buttonStart.id = "start";
}

function deletePlate() {
  var a = document.getElementById("cardCroupierFront");
  var b = document.getElementById("scoreC");
  var c = document.getElementById("scoreP");
  var d = document.getElementById("cardPlayerFront");
  var e = document.getElementById("yourS");
  var f = document.getElementById("vs");
  var g = document.getElementById("dealerS");
  a.innerHTML = "";
  b.innerHTML = "";
  c.innerHTML = "";
  d.innerHTML = "";
  e.innerHTML = "";
  f.innerHTML = "";
  g.innerHTML = "";
}

function disabledStopButton() {
  let b = document.getElementById("stop");
  b.setAttribute("disabled", "");
}

function abledStopButton() {
  let b = document.getElementById("stop");
  b.removeAttribute("disabled");
}

function disabledStartButton() {
  let b = document.getElementById("start");
  b.setAttribute("disabled", "");
}

function abledStartButton() {
  let b = document.getElementById("start");
  b.removeAttribute("disabled");
}

function resetGame() {
  setTimeout(() => {
    var res = blackgame.getWinner(countPlayerScore(), countCroupierScore());
    if (res === "L") {
      console.log("loose");
      bet = 0;
      document.getElementById("bet").innerHTML =
        `<div class="amount" id="betAmount">` + bet + ` $</div>`;
    } else {
      console.log("win");
      wallet = wallet + bet * 2;
      bet = 0;
      document.getElementById("wallet").innerHTML =
        `<div class="amount" id="walletAmount">` + wallet + ` $</div>`;
      document.getElementById("bet").innerHTML =
        `<div class="amount" id="betAmount">` + bet + ` $</div>`;
    }
    remainingCard = [...cards];
    startCardCroupier = [];
    startCardPlayer = [];
  }, 1000);
}

function finish() {
  printModalEnd();
  return console.log("hello");
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

function reloadGame() {
  if (wallet > -1) {
    resetGame(),
      setTimeout(() => {
        return deletePlate(), abledStartButton();
      }, 3000);
  } else finish();
}

buttonStart.addEventListener("click", function() {
  if (buttonStart.id === "start") {
    return (
      printCroupierStart(),
      printPlayerStart(),
      countPlayerScore(),
      setAddBtn(),
      printWalletFirst(),
      printModalBet(),
      abledStopButton()
    );
  } else return addPlayersCard(), countPlayerScore(), playerCheckScore();
});

buttonStop.addEventListener("click", function() {
  return (
    countCroupierScore(),
    croupierLoop(),
    printVs(),
    discoverFirst(),
    disabledStopButton(),
    setStartBtn(),
    reloadGame(),
    disabledStartButton()
  );
});

buttonFinish.addEventListener("click", function() {
  return location.reload();
});

buttonAbout.addEventListener("click", function() {
  return printModalAbout();
});
