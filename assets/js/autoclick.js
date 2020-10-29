
let autoclick = document.getElementById('runAutoClic');
autoclick.addEventListener('click', enableAutoclick);

let autoclickCost = 50;
let autoclickOn = false;

function displayAutoclick() {
  autoclick.value = 'Autoclick (cost ' + autoclickCost + ')';
}

function autoclickEnabler() {
  if (!autoclickOn && scoreTotal >= autoclickCost) {
    autoclick.disabled = false;
  } else {
    autoclick.disabled = true;
  }
}

function enableAutoclick() {
  scoreTotal -= autoclickCost;
  autoclickOn = true;
  autoclick.disabled = true;
  displayScore();
}

function autoclickF() {
  if (autoclickOn) {
    increaseScore();
  }
}

autoclickInterval = window.setInterval(autoclickF, 1000);

autoclickEnabler();