
const click = document.getElementById('runClick');

function Display() {
    scoreDisplay.innerHTML = scoreTotal;
}


document.getElementById('runClick').addEventListener("click", function () {
    scoreTotal = scoreTotal + IncreaseOnClick;
    return scoreTotal;
    Display();
}
document.getElementById('runAutoClick').addEventListener("click", function () {
    scoreTotal = scoreTotal - autoClickPrice;
    return scoreTotal;
    Display();
}
document.getElementById('runMultiplier').addEventListener('click', () =>{ 
    scoreTotal = scoreTotal - multiplierPrice;
    return scoreTotal;
    Display();
}
document.getElementById('runBonus').addEventListener('click', () =>{ 
    scoreTotal = scoreTotal - bonusPrice;
    return scoreTotal;
    Display();
}
jj


    setInterval(function () {
        scoreTotal = scoreTotal + autoClick;
        return scoreTotal;
        Display();
    }, 1000;
    
    setInterval(function () {
        Display();
    }, 200;


