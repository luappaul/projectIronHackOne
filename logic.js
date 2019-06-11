class BlackGame {
  constructor(cards) {
    this.cards = cards;
  }

  shuffle(evt) {
    return evt.sort(() => Math.random() - 0.5);
  }

  random(evt) {
    var evt = this.shuffle(evt);
    return evt;
  }

  getValue(evt) {
    let res = evt.map(a => a.value);
    return res;
  }

  getScore(evt) {
    let sum = evt.reduce((acc, val) => {
      return acc + val;
    });
    return sum;
  }

  getWinner(a, b) {
    if (a > 21) return "YOU LOOSE";
    else if (b > 21) return "YOU WIN";
    else if (a > b) return "YOU WIN";
    else if (a == b) return "YOU WIN";
    else return "YOU LOOSE";
  }

  playerLoose(res) {
    if (res > 21) {
      return "lost";
    } else return "ok";
  }
}
