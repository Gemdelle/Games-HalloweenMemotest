let currentSelection = [];
const loseSound = new Audio('Sounds/Lose.wav');
const winSound = new Audio('Sounds/Win.wav');
const endSound = new Audio('Sounds/End.wav');


/* 01. html Elements. */

const card01 = document.getElementById('card01');
const card02 = document.getElementById('card02');
const card03 = document.getElementById('card03');
const card04 = document.getElementById('card04');
const card05 = document.getElementById('card05');
const card06 = document.getElementById('card06');
const card07 = document.getElementById('card07');
const card08 = document.getElementById('card08');
const card09 = document.getElementById('card09');
const card10 = document.getElementById('card10');
const card11 = document.getElementById('card11');
const card12 = document.getElementById('card12');
const card13 = document.getElementById('card13');
const card14 = document.getElementById('card14');
const card15 = document.getElementById('card15');
const card16 = document.getElementById('card16');

let wins = 0;

/* 02. Functions Win vs. Lose. */

function lose() {
    currentSelection[0].src = "Cards/Front.png";
    currentSelection[1].src = "Cards/Front.png";
    currentSelection = [];
}

function validateWin() {

    if (currentSelection.length === 2) {
        if (currentSelection[0].src != currentSelection[1].src) {
            loseSound.play();
            setTimeout(lose, 1200);
        } else {

            currentSelection = [];
            wins += 1;

            if (wins == 8) {
                endSound.play();
            } else {
                winSound.play();
            }
        }
    }
}

/* 03. Card replacement & Evaluate Win vs. Lose. */

card01.addEventListener("click", function () {
    card01.src = "Cards/Card01.png";
    currentSelection.push(card01);
    validateWin();
})

card02.addEventListener("click", function () {
    card02.src = "Cards/Card02.png";
    currentSelection.push(card02);
    validateWin();
})

card03.addEventListener("click", function () {
    card03.src = "Cards/Card06.png";
    currentSelection.push(card03);
    validateWin();
})

card04.addEventListener("click", function () {
    card04.src = "Cards/Card04.png";
    currentSelection.push(card04);
    validateWin();
})

card05.addEventListener("click", function () {
    card05.src = "Cards/Card08.png";
    currentSelection.push(card05);
    validateWin();
})

card06.addEventListener("click", function () {
    card06.src = "Cards/Card02.png";
    currentSelection.push(card06);
    validateWin();
})

card07.addEventListener("click", function () {
    card07.src = "Cards/Card06.png";
    currentSelection.push(card07);
    validateWin();
})

card08.addEventListener("click", function () {
    card08.src = "Cards/Card03.png";
    currentSelection.push(card08);
    validateWin();
})

card09.addEventListener("click", function () {
    card09.src = "Cards/Card05.png";
    currentSelection.push(card09);
    validateWin();
})

card10.addEventListener("click", function () {
    card10.src = "Cards/Card07.png";
    currentSelection.push(card10);
    validateWin();
})

card11.addEventListener("click", function () {
    card11.src = "Cards/Card08.png";
    currentSelection.push(card11);
    validateWin();
})

card12.addEventListener("click", function () {
    card12.src = "Cards/Card03.png";
    currentSelection.push(card12);
    validateWin();
})

card13.addEventListener("click", function () {
    card13.src = "Cards/Card05.png";
    currentSelection.push(card13);
    validateWin();
})

card14.addEventListener("click", function () {
    card14.src = "Cards/Card04.png";
    currentSelection.push(card14);
    validateWin();
})

card15.addEventListener("click", function () {
    card15.src = "Cards/Card01.png";
    currentSelection.push(card15);
    validateWin();
})

card16.addEventListener("click", function () {
    card16.src = "Cards/Card07.png";
    currentSelection.push(card16);
    validateWin();
})



