let guess = '';
let storedBalance = JSON.parse(localStorage.getItem('balanceMoney')) ;
let balanceMoney = storedBalance || 1000;
let balance = document.querySelector('.balance');
balance.innerHTML = `Balance: $${balanceMoney}`;

function setGuess(param) {
  guess = param;
  subtext.innerHTML = `You Chose: ${param}`;
}

let animation = document.querySelector('.container');
let resultText = document.querySelector('.result-text');
let subtext = document.querySelector('.subtext');
const hasClass1 = animation.classList.contains('container-flip-head');
const hasClass2 = animation.classList.contains('container-flip-tail');

function playGame() {
  const wager = document.querySelector('.num-input');
  const wagerValue = parseInt(wager.value);
  

  const randomNumber = Math.random();
  let computerMove = '';

  animation.classList.remove('container-flip-head');
  animation.classList.remove('container-flip-tail');
  animation.classList.add('container-static', 'container-flip');

  resultText.innerHTML = 'Flipping coin!';

  randomNumber > 0.5 ? (computerMove = 'head') : (computerMove = 'tail');
  function coinShow() {
    computerMove === 'head'
      ? animation.classList.replace('container-flip', 'container-flip-head')
      : animation.classList.replace('container-flip', 'container-flip-tail');
  }
  setTimeout(coinShow, 3500);
  guess === computerMove ? winFunction() : loseFunction();

  function winFunction() {
    function Screen() {
      resultText.innerHTML = `You Win <br> congrats!`;
      subtext.innerHTML = '';
      balanceMoney += wagerValue;
      balance.innerHTML = `Balance: $${balanceMoney}`;
      localStorage.setItem('balanceMoney', balanceMoney)
      return balanceMoney;
    }
    setTimeout(Screen, 3500);
  }

  function loseFunction() {
    function Screen() {
      resultText.innerHTML = `You lose <br> better luck next time!`;
      subtext.innerHTML = '';
      balanceMoney -= wagerValue;
      balance.innerHTML = `Balance: $${balanceMoney}`;
      localStorage.setItem('balanceMoney', balanceMoney)
      return balanceMoney;
    }
    setTimeout(Screen, 3500);
  }
}

balance.innerHTML = `Balance: $${balanceMoney}`;
console.log(typeof balanceMoney)
localStorage.setItem('balanceMoney', balanceMoney);


