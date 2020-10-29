// Déclaration de classe et d'objets

let scoreTotal = 0;

class PowerUp {
  constructor(price, button, value) {
    this.price = price;
    this.button = button;
    this.value = value;
  }
}

let multiplier = new PowerUp(10, document.getElementById("runMultiplier"), 1);
let bonus = new PowerUp(200, document.getElementById("runBonus"), 0);
let autoClick = new PowerUp(20, document.getElementById("runAutoClick"), 0);

let powerUps = [multiplier, bonus, autoClick];

/**
 * Activation des boutons
 */ powerUps.forEach((i) =>
  i.button.addEventListener("click", () => {
    buy(i.price, i.button, i.value);
  })
);

/**
 * Fonction click manuel
 */ document.getElementById("runClick").addEventListener("click", () => {
  scoreTotal = scoreTotal + multiplier.value;
  //  console.log(scoreTotal);
  document.getElementById("scoreTotal").innerHTML = scoreTotal;
});

/**
 *Fonction clic auto
 */ setInterval(function () {
  scoreTotal = scoreTotal + autoClick.value;
  // console.log(`Autoclick ${scoreTotal}`);
  document.getElementById("scoreTotal").innerHTML = scoreTotal;
  return scoreTotal;
}, 1000);

/**
 * Fonction de rafraîchissement du score
 */ setInterval(function () {
  powerUps.forEach((i) => checkPrice(i.price, i.button));
}, 500);

/**
 * Fonction de contrôle du prix
 */ function checkPrice(price, button) {
  if (price <= scoreTotal) {
    button.disabled = false; // Button active
    console.log(price, button.getAttribute("id"), `Can afford`);
  } else {
    button.disabled = true;
    console.log(price, button.getAttribute("id"), `Can not afford`);
  }
}

/**
 * Fonction d'achat
 */ function buy(price, button, value) {
  scoreTotal = scoreTotal - price;
  checkPrice(price, button); // Pour que le bouton se désactive à l'instant de l'achat
  increasePrice(price, button);
  increaseScore(button, value);
  // return scoreTotal;
}

/**
 * Fonction d'augmentation du prix
 */ function increasePrice(price, button) {
  if (button.getAttribute("id") === "runMultiplier" || button.getAttribute("id") === "runAutoClick") {
    price = Math.floor(price * 1.15); // Le prix d'achat ne change pas
    console.log(button.getAttribute("id"), `price =`, Math.floor(price)); // Le prix affiché change 1 fois (mais en fait pas vraiment)
  } else {
    price = price * price;
    console.log(button.getAttribute("id"), `price =`, price);
  }
  displayPrice(price, button);
}

/**
 * Fonction d'affichage du prix du prochain power-up
 */ function displayPrice(price, button) {
  button.innerHTML = `Améliorer : ${price}`; // La valeur change 1 fois (mais en fait pas vraiment) + la fonction devrait se situer en début de script pour s"exécuter dès le début
}

/**
 * Fonction d'augmentation du score
 */ function increaseScore(button, value) {
  if (button.getAttribute("id") === "runMultiplier" || button.getAttribute("id") === "runAutoClick") {
    value = value + 1; // La valeur du multiplicateur ou de l'autoclick ne change pas
    console.log(button.getAttribute("id"), `value =`, value); // La valeur change 1 fois (mais en fait pas vraiment)
  } else {
    value = value; // Je ne me souviens plus de ce que le bonus 30 secondes doit faire exactement
    console.log(button.getAttribute("id"), value);
  }
  displayLevel(button, value);
}

/**
 * Fonction d'affichage du niveau de power-up
 */ function displayLevel(button, value) {
  if (button.getAttribute("id") === "runMultiplier") {
    document.getElementById("multiplier").innerHTML = `Multiplicateur x${value}`; // La valeur change 1 fois (mais en fait pas vraiment)
  } else if (button.getAttribute("id") === "runBonus") {
    document.getElementById("bonus").innerHTML = `Bonus actif / inactif`; // La valeur change 1 fois (mais en fait pas vraiment)
  } else if (button.getAttribute("id") === "runAutoClick") {
    document.getElementById("autoClick").innerHTML = `Autoclick x${value}`; // La valeur change 1 fois (mais en fait pas vraiment)
  }
}
