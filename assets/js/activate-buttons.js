// Déclaration de classe et d'objets

class PowerUp {
    constructor(price, button) {
      this.price = price;
      this.button = button;
    }
  }

  let multiplier = new PowerUp(multiplierPrice, document.getElementById("runMultiplier"));
  let bonus = new PowerUp(bonusPrice, document.getElementById("runBonus"));
  let autoClick = new PowerUp(autoClickPrice, document.getElementById("runAutoClick"));

  let powerUps = [multiplier, bonus, autoClick];

/**
 * Fonction de rafraîchissement du score
 */setInterval(powerUps.forEach(checkPrice()),100); 

/**
 * Fonction de contrôle du prix
 */checkPrice() {
      if (canAfford(this.price)) {
          activateButton(this.button);
      }
  }
  
/**
 * Fonction de validation de transaction
 */canAfford(this.price) {
    if (this.price <= scoreTotal) {
        return true;
    } else {
        this.button.removeEventListener("click", buy(this.price));
    }
}

/**
 * Fonction d'activation de bouton
 */activateButton(this.button) {
    this.button.toggle("canAfford");
    this.button.addEventListener("click", buy(this.price));
}

/**
 * Fonction d'achat
 */buy(this.price) {
    scoreTotal = scoreTotal - this.price;
    return scoreTotal;
}