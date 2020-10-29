// V1

/**
 * Fonction de rafraîchissement du score
 */setInterval(checkPrices(),100);     

/**
 * Fonction d'activation des boutons
 */checkPrices() {
    canAffordMultiplier();
    canAffordBonus();
 }
/**
 * Activation visuelle (class CSS "canAfford")
 */activateButton() {
    document.getElementsByClassName("btn").toggle("canAfford")
 }
 /**
 * Fonction d'activation du multiplicateur
 */canAffordMultiplier() {
    if (scoreTotal >= multiplierPrice) {
        document.getElementById("runMultiplier").addEventListener("click", multiply()); 
        activateButton();
    }
}
/**
 * Fonction d'activation du boost 200%
 */canAffordBonus() {
    if (scoreTotal >= bonusPrice) {
        document.getElementById("runBonus").addEventListener("click", boost());
        activateButton();
    }
}

------------------------------------------

// V2

/**
 * Fonction de rafraîchissement du score
 */setInterval(checkPrices(),100);  

 /**
 * Fonction de veille des prix
 */checkPrices() {
    let prices = [multiplierPrice, bonusPrice, autoClickPrice];
    let buttons = [document.getElementById("runMultiplier"), document.getElementById("runBonus"), document.getElementById("runAutoClick")];
    for (item of prices) {
        if (canAfford(item)) {
           var a = buttons[indexOf(item)]
           activateButton(a)
        }
    }
    }
   
    /**
     * Fonction d'activation de bouton
     */activateButton(a) {
       document.getElementById(a).toggle("canAfford")
     }

