let clickedNum = 0;
let caseNum = 0;
let prevCaseNum = 0;
let stopClicks = false;

function buttonClicked() {
    event.preventDefault();
    clickedNum += 1;
    while (caseNum == prevCaseNum){
        caseNum = (Math.floor(Math.random() * 17));
    }
    prevCaseNum = caseNum;
    console.log(caseNum);
    
    if (clickedNum < 100) {
        switch (caseNum) {
            case 0:
                randText = "To err is human, to forgive is divine";
                break;
            case 1:
                randText = "Knock knock. Who's there? Me!";
                break;
            case 2:
                randText = "Missed a spot!";
                break;
            //In honor of me missing the 2nd switch case the first time around
            case 3:
                randText = "Okay. That one hurt!";
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
            case 10:
                randText = "ctrl + u";
                break;
            case 11:
                randText = "AAAS YOUUUU WIIISH";
                break;
            case 12:
                randText = "Waiting for: A rainy day";
                break;
            case 13:
                randText = "Waiting for: Blender 5.0";
                break;
            case 14:
                randText = "Waiting for: GitHub 2????";
                break;
            case 15:
                randText = "This... is... FARGO!!!";
                break;
            case 16:
                randText = "See, it's ok. He saw it on the television!";
                break;
        }
    }
    else if (clickedNum >= 100 && clickedNum < 200) {
        randText = "STOP THAT!!!!";
    }
    else if (clickedNum >= 200 && clickedNum < 500) {
        randText = "SERIOUSLY, CUT IT OUT!";
    }
    else if (clickedNum >= 500 && stopClicks == false) {
        if(caseNum == 13){
            stopClicks = true;
            document.getElementById("buttonStats").textContent =
            "That's enough. I'm taking away your button privileges >:(";
            document.getElementById("coolButton").style.visibility = "hidden";
        }
    }

    if (stopClicks == false) {
        if (clickedNum == 1){
        document.getElementById("buttonStats").textContent = "Button clicked " + clickedNum + " time!";
        }
        else{
        document.getElementById("buttonStats").textContent = "Button clicked " + clickedNum + " times!";
        }
    }
    
    document.getElementById("coolButton").textContent = randText;
    
    return false;
}
