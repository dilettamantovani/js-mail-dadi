//email

const authorizedEmail = ["muffinman@gingerbread.com", "lordfarquaad@farfaraway.com", "princecharming@loser.com", "pussinboots@softkitty.com", "shrek@swamp.com"];
console.log("list", authorizedEmail);

const button = document.getElementById("button");
const checkResult = document.querySelector("h6");

button.addEventListener("click", function () {
    const emailInput = document.getElementById("emailInput").value;
    for (let i = 0; i < authorizedEmail.length; i++) {
        const element = authorizedEmail[i];
    }
    if (authorizedEmail.includes(emailInput)) {
        checkResult.classList = "text-success bg-light rounded-2 p-1";
        checkResult.innerHTML = "Accesso autorizzato";
    }
    else if (!emailInput.includes("@")) {
        checkResult.classList = "text-warning bg-light rounded-2 p-1";
        checkResult.innerHTML = "Errore di formattazione";
    }
    else {
        checkResult.classList = "text-danger bg-light rounded-2 p-1";
        checkResult.innerHTML = "Accesso negato";
    }
})


//dice

const diceBtn = document.getElementById("diceBtn");
const myRoll = document.getElementById("myRoll");
const pcRoll = document.getElementById("pcRoll");
const diceOutput = document.getElementById("diceOutput");

diceBtn.addEventListener("click", function() {
    let randomDice = Math.floor(Math.random() * 6 + 1);
    myRoll.innerHTML = randomDice;
    randomDice = Math.floor(Math.random() * 6 + 1);
    pcRoll.innerHTML = randomDice;

    if (myRoll.innerHTML > pcRoll.innerHTML) {
        diceOutput.innerHTML = "Hai Vinto";
        diceOutput.classList = "text-success bg-light rounded-2 p-1 mt-2";

    }

    else if (myRoll.innerHTML < pcRoll.innerHTML) {
        diceOutput.innerHTML = "Hai Perso";
        diceOutput.classList = "text-danger bg-light rounded-2 p-1 mt-2";

    } 
    
    else {
        diceOutput.innerHTML = "Pareggio";
        diceOutput.classList = "text-warning bg-light rounded-2 p-1 mt-2";
    }
})