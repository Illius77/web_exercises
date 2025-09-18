function getUrlParam(param, defaultValue) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.has(param) ? parseInt(urlParams.get(param)) : defaultValue;
}

let limitLow = getUrlParam("low", 1);
let limitHigh = getUrlParam("high", 10);
let maxTries = getUrlParam("tries", 3);

let random, tried;

const instructionsEl = document.querySelector('#instructions');
const feedbackEl = document.querySelector('#feedback');
const triesInfoEl = document.querySelector('#tries-info');
const userGuessInput = document.querySelector('#userGuess');
const submitBtn = document.querySelector('#submit');
const playAgainBtn = document.querySelector('#play-again');

function initGame() {
  random = Math.floor(Math.random() * (limitHigh - limitLow + 1)) + limitLow;
  tried = 0;
  instructionsEl.textContent = `Guess the number between ${limitLow} and ${limitHigh}`;
  feedbackEl.textContent = "";
  triesInfoEl.textContent = `Tries left: ${maxTries}`;
  playAgainBtn.style.display = "none";
  userGuessInput.value = "";
  userGuessInput.disabled = false;
  submitBtn.disabled = false;
}

function giveFeedback(guess) {
  let distance = Math.abs(guess - random);
  if (guess === random) {
    return `✔ Correct! The number was ${random}. You found it in ${tried} tries.`;
  } else if (distance <= 2) {
    return guess < random ? "Close! Try a little higher." : "Close! Try a little lower.";
  } else {
    return guess < random ? "Too low, try again." : "Too high, try again.";
  }
}

function endGame(message) {
  feedbackEl.textContent = message;
  userGuessInput.disabled = true;
  submitBtn.disabled = true;
  playAgainBtn.style.display = "inline-block";
}

submitBtn.addEventListener("click", () => {
  let guess = parseInt(userGuessInput.value);
  if (isNaN(guess)) {
    feedbackEl.textContent = "⚠ Please enter a valid number.";
    return;
  }

  if (guess < limitLow || guess > limitHigh) {
    feedbackEl.textContent = `⚠ Enter a number between ${limitLow} and ${limitHigh}.`;
    return;
  }

  tried++;
  feedbackEl.textContent = giveFeedback(guess);
  triesInfoEl.textContent = `Tries left: ${maxTries - tried}`;

  if (guess === random) {
    endGame(`You won in ${tried} tries!`);
  } else if (tried >= maxTries) {
    endGame(`You lost! The number was ${random}.`);
  }
});

playAgainBtn.addEventListener("click", () => {
  limitHigh += 5;
  maxTries += 1;
  initGame();
});

initGame();
