let clickedNum = 0;
function buttonClicked() {
    clickedNum += 1;
    if (clickedNum < 100) {
        switch (Math.floor(Math.random() * 10)) {
            case 0:
                randText = "To err is to human, to forgive is divine";
                break;
            case 1:
                randText = "Knock knock. Who's there? Me!";
                break;
            case 3:
                randText = "Okay. that one hurt!";
                break;
            case 4:
                randText = "Hello? Can anyone hear me?";
                break;
            case 5:
                randText = "I am a button. You are a human... I think?";
                break;
            case 6:
                randText = "What day is it again?";
                break;
            case 7:
                randText = "Go Bison!";
                break;
            case 8:
                randText = "Computer engineer? More like... computer... uhhhhhh";
                break;
            case 9:
                randText = "Waiting for: Rhythm Heaven Groove!";
                break;
        }
    } else if (clickedNum >= 100 && clickedNum < 200) {
        randText = "STOP THAT!!!!";
    } else if (clickedNum >= 200 && clickedNum < 500) {
        randText = "SERIOUSLY, CUT IT OUT!";
    } else if (clickedNum >= 500) {
        document.getElementById("buttonStats").textContent =
            "That's enough. I'm taking away your button privledges >:(";
        document.getElementById("coolButton").style.visibility = "hidden";
    }

    document.getElementById("coolButton").textContent = randText;

    if (clickedNum < 500) {
        document.getElementById("buttonStats").textContent = "Button clicked " + clickedNum + " times!";
    }
}
