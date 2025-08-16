let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 5;
let usedAttempts = 0;

document.getElementById("but").addEventListener("click", function () {
    let k = Number(document.getElementById("input").value);

    // increase used attempts only when user clicks submit
    usedAttempts++;
    attempts--;

    if (k === randomNum) {
        document.getElementById("message").innerText =
            " You guessed it right in " + usedAttempts + " attempts!";
        document.getElementById("but").disabled = true;
    } 
    else if (attempts === 0) {
        document.getElementById("message").innerText =
            " Sorry, you lost. The number was " + randomNum;
        document.getElementById("but").disabled = true;
    }
    else if (k < randomNum) {
        if (randomNum - k >= 10) {
            document.getElementById("message").innerText =
                "Too low! Try again. You only have " + attempts + " attempts left.";
        } else {
            document.getElementById("message").innerText =
                "Close! Try increasing number. You only have " + attempts + " attempts left.";
        }
    } 
    else {
        if (k - randomNum >= 10) {
            document.getElementById("message").innerText =
                "Too high! Try again. You only have " + attempts + " attempts left.";
        } else {
            document.getElementById("message").innerText =
                "Close! Try decreasing number. You only have " + attempts + " attempts left.";
        }
    }
});

document.getElementById("reset").addEventListener("click", function () {
    randomNum = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    usedAttempts = 0;
    document.getElementById("input").value = "";
    document.getElementById("message").innerText = "🔄 Reset successful! Try again!";
    document.getElementById("but").disabled = false;
});
