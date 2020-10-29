let scoreTotal = 0;
let scoreOnClick = 1;
let multiplierPrice = 15;

/**
 * Fonction multiplicateur
 */multiply() ({
    buyMultiplier();
    increaseMultiplierPrice();
    increaseScoreOnClick();
    displayMultiplier();
    displayMultiplierPrice();
 })
/**
 * Fonction acheter multiplicateur
 */buyMultiplier() {
    scoreTotal = scoreTotal - multiplierPrice;
    return scoreTotal;
}
/**
 * Fonction augmenter prix multiplicateur
 */increaseMultiplierPrice() {
    multiplierPrice = multiplierPrice * 1.15;
    return Math.floor(multiplierPrice);
 }
/**
 * Fonction augmenter multiplicateur
 */increaseScoreOnClick() {
    scoreOnClick = scoreOnClick + 1;
    return scoreOnClick;
 }
/**
 * Fonction afficher multiplicateur
 */displayMultiplier() {
    document.getElementById("multiplier").innerHTML = `Multiplicateur x${scoreIncreaseOnClick}`;
 }
/**
 * Fonction afficher coût amélioration multiplicateur
 */displayMultiplierPrice() {
    document.getElementById('runMultiplier').innerHTML = `Améliorer multiplicateur: ${multiplierPrice}`;
 }


 