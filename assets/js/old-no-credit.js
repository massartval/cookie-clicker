buyMultiplier() {
var x = multiplierPrice;
if (canAfford(x)) {
    buy(x);
    }
}

buyBonus() {
var x = bonusPrice;
if (canAfford(x)) {
    buy(x);
    }
}

buyAutoClick() {
var x = autoClickPrice;
if (canAfford(x)) {
    buy(x);
    }
}

/**
 * Fonction de validation de la transaction
 */canAfford(x) {
    if (x <= scoreTotal) {
        return true;
    }
 }

 /**
  * Fonction d'achat 
  */buy(x) {
scoreTotal = scoreTotal - x;
return scoreTotal;
  }


