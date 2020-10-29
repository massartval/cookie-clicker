// Déclaration de classe et d'objets

let scoreTotal = 200;
let bonusCooldown = false;

class PowerUp {
  constructor(id, name, price, value) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.value = value;
    this.button = document.getElementById(id);
    this.display = document.getElementById(name);
  }
  disableButton(bool) {
    this.button.disabled = bool; // true = disabled
  }
  getPrice() {
    return this.price;
  }
  increasePrice(coef) {
    this.price = Math.floor(this.price * coef);
  }
  getValue() {
    return this.value;
  }
  increaseValue(term) {
    this.value = this.value + term;
  }
  multiplyValue(coef) {
    this.value = Math.floor(this.value * coef);
  }
}

let multiplier = new PowerUp("runMultiplier", "multiplicateur", 10, 1);
let bonus = new PowerUp("runBonus", "bonus", 20, 0);
let autoClick = new PowerUp("runAutoClick", "autoclic", 20, 0);

let powerUps = [multiplier, bonus, autoClick];

/**
 * Activation des boutons
 */ powerUps.forEach((i) =>
  i.button.addEventListener("click", () => {
    buy(i, i.id, i.price);
    displayPrice(i.name, i.price, i.button);
    displayValue(i, i.id, i.name, i.value, i.display);
    console.log(`${name} activé`);
  })
);

/**
 * Fonction click manuel
 */ document.getElementById("runClick").addEventListener("click", () => {
  scoreTotal = scoreTotal + multiplier.value;
  console.log(scoreTotal);
  document.getElementById("scoreTotal").innerHTML = scoreTotal;
  checkPrice();
  return scoreTotal;
});

/**
 *Fonction clic auto
 */ setInterval(() => {
  scoreTotal = scoreTotal + autoClick.value;
  // console.log(`Autoclick ${scoreTotal}`);
  document.getElementById("scoreTotal").innerHTML = scoreTotal;
  checkPrice();
  return scoreTotal;
}, 1000);

/**
 * Fonction de contrôle du prix
 */ function checkPrice() {
  powerUps.forEach(canAfford);
  function canAfford(i) {
    if (i.price > scoreTotal || (i.id === "runBonus" && bonusCooldown === true)) {
      i.disableButton(true); // Button disabled
      // console.log(i.price, i.id, `Can not afford`);
    } else {
      i.disableButton(false); // Button active
      // console.log(i.price, i.id, `Can afford`);
    }
  }
}

/**
 * Fonction d'achat
 */ function buy(i, id, price) {
  scoreTotal = scoreTotal - price;
  checkPrice(i);
  if (id === "runMultiplier" || id === "runAutoClick") {
    i.increasePrice(1.15); // Le prix du multiplicateur et de l'autoclic augmentent de 15% (arrondi à l'inférieur) à chaque nouvel achat
    i.increaseValue(1); // La valeur du multiplicateur et de l'autoclic augmentent de 1 à chaque nouvel achat
  } else if (id === "runBonus") {
    i.increasePrice(2); // Le prix du bonus double à chaque nouvel achat
    startBonus();
  }
  // return scoreTotal;
}

/**
 * Fonction d'activation du bonus x2 pendant 30 secondes
 */ function startBonus() {
  bonus.disableButton(true);
  bonusCooldown = true;
  multiplier.multiplyValue(2); // Multiplie par 2 la valeur de chaque clic - fonctionne correctement
  autoClick.multiplyValue(2); // Multiplie par 2 la valeur de chaque autoclic - fonctionne correctement
  setTimeout(function () {
    bonusCooldown = false; // Empêche de cliquer à nouveau sur le bonus pendant 120 secondes - fonctionne correctement
    bonus.disableButton(false);
  }, 120000);
  setTimeout(function () {
    multiplier.multiplyValue(0.5);
    autoClick.multiplyValue(0.5);
  }, 30000);
}

/**
 * Fonction d'affichage du prix des power-ups
 */ function displayPrice(name, price, button) {
  button.innerHTML = `Améliorer ${name}: ${price}`;
}

/**
 * Fonction d'affichage de la valeur des power-ups
 */ function displayValue(i, id, name, value, display) {
  if (id === "runMultiplier" || id === "runAutoClick") {
    display.innerHTML = `${name} x ${value}`;
  } else if (id === "runBonus") {
    // displayBonus(i);
  }
}
/**
 * Fonction de compte-à-rebours du bonus
 */ function displayBonus(i) {
  let bonusTime = 30;
  i.display.innerHTML = `${name}: ${bonusTime}`;
  while (bonusTime >= 0) {
    setInterval(decrement(bonusTime), 1000);
  }
  function decrement(bonusTime) {
    bonusTime = bonusTime - 1;
  }
}
