var xicon = "fa fa-times";
var oicon = "fa fa-circle-o";
var mticon = "";
var defaultvalues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var indeies = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var win = [];
var turns = 0;
var playeronescore = 0;
var playertwoscore = 0;
var drawscore = 0;
var RoundCount = 0;
var startingboard = document.getElementById('overlayout').innerHTML
var startingpage = document.getElementById('fullpage').innerHTML


async function Play(index) {
    if (document.getElementById(index).className != xicon && document.getElementById(index).className != oicon) {
        if (turns % 2 == 0) {
            document.getElementById(index).className = xicon;
            document.getElementById(index).style.color = 'red';
            indeies[parseInt(index) - 1] = "x";
            turns++;
        } else {
            document.getElementById(index).className = oicon;
            document.getElementById(index).style.color = 'blue';
            indeies[parseInt(index) - 1] = "o";
            turns++;
        }
    }

    if (Check()) {
        if (turns % 2 == 1) {

            playeronescore++;
            document.getElementById('player1score').value = playeronescore;
            RoundCount++;
            document.getElementById('roundcount').innerHTML = RoundCount;
            document.getElementById('overlayout').style.pointerEvents = 'none';
            for (var i = 0; i < 6; i++) {
                if (i % 2 == 1) {
                    let t = (win[0] + 1).toString();
                    let u = (win[1] + 1).toString();
                    let v = (win[2] + 1).toString();
                    document.getElementById(t).style.color = 'green';
                    document.getElementById(u).style.color = 'green';
                    document.getElementById(v).style.color = 'green';
                    await new Promise(resolve => setTimeout(resolve, 300));
                } else {
                    let t = (win[0] + 1).toString();
                    let u = (win[1] + 1).toString();
                    let v = (win[2] + 1).toString();
                    document.getElementById(t).style.color = 'red';
                    document.getElementById(u).style.color = 'red';
                    document.getElementById(v).style.color = 'red';
                    await new Promise(resolve => setTimeout(resolve, 300));
                }
            }
        }
        else {
            playertwoscore++;
            document.getElementById('player2score').value = playertwoscore;
            RoundCount++;
            document.getElementById('roundcount').innerHTML = RoundCount;
            document.getElementById('overlayout').style.pointerEvents = 'none';
            for (var i = 0; i < 6; i++) {
                if (i % 2 == 1) {
                    let t = (win[0] + 1).toString();
                    let u = (win[1] + 1).toString();
                    let v = (win[2] + 1).toString();
                    document.getElementById(t).style.color = 'green';
                    document.getElementById(u).style.color = 'green';
                    document.getElementById(v).style.color = 'green';
                    await new Promise(resolve => setTimeout(resolve, 300));
                } else {
                    let t = (win[0] + 1).toString();
                    let u = (win[1] + 1).toString();
                    let v = (win[2] + 1).toString();
                    document.getElementById(t).style.color = 'blue';
                    document.getElementById(u).style.color = 'blue';
                    document.getElementById(v).style.color = 'blue';
                    await new Promise(resolve => setTimeout(resolve, 300));
                }
            }
        }

    }
    else {

        var flag = false
        for (var i = 0; i < 9; i++) {
            if (typeof (indeies[i]) != "number") {
                flag = true
            }
            else {
                flag = false;
                break;
            }
        }

        if (flag) {
            drawscore++;
            document.getElementById('Drawscore').value = drawscore
            RoundCount++;
            document.getElementById('roundcount').innerHTML = RoundCount;
        }

    }
}


function Check() {
    if (equalsthree(indeies[0], indeies[1], indeies[2])) {
        win = [0, 1, 2];
        return true;
    }
    else if (equalsthree(indeies[3], indeies[4], indeies[5])) {
        win = [3, 4, 5];
        return true;
    }
    else if (equalsthree(indeies[6], indeies[7], indeies[8])) {
        win = [6, 7, 8];
        return true;
    }
    else if (equalsthree(indeies[0], indeies[3], indeies[6])) {
        win = [0, 3, 6];
        return true;
    }
    else if (equalsthree(indeies[1], indeies[4], indeies[7])) {
        win = [1, 4, 7];
        return true;
    }
    else if (equalsthree(indeies[2], indeies[5], indeies[8])) {
        win = [2, 5, 8];
        return true;
    }
    else if (equalsthree(indeies[0], indeies[4], indeies[8])) {
        win = [0, 4, 8];
        return true;
    }
    else if (equalsthree(indeies[2], indeies[4], indeies[6])) {
        win = [2, 4, 6];
        return true;
    }
    else {
        return false;
    }
}

function equalsthree(a, b, c) {
    if (a == b) {
        if (b == c) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function resetpage() {
    location.reload()
}

async function nextgame() {
    document.getElementById('overlayout').innerHTML = startingboard;
    indeies = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    turns = 0;
    if (RoundCount % 2 == 1) {
        turns++;
        
        document.getElementById('instruction').innerText = "!!Player Two have to start this Round....."
        for (var i = 1; i <= 6; i++) {
            if(i % 2 == 0){
                document.getElementById('instruction').style.color = 'red';
                await new Promise(resolve => setTimeout(resolve, 300));
            }else{
                document.getElementById('instruction').style.color = 'white';
                await new Promise(resolve => setTimeout(resolve, 300));
            }
        }
    } else {
        document.getElementById('instruction').innerText = "!!Player One have to start this Round....."
        for (var i = 1; i <= 6; i++) {
            if(i % 2 == 0){
                document.getElementById('instruction').style.color = 'red';
                await new Promise(resolve => setTimeout(resolve, 300));
            }else{
                document.getElementById('instruction').style.color = 'white';
                await new Promise(resolve => setTimeout(resolve, 300));
            }
        }
    }


    document.getElementById('overlayout').style.pointerEvents = 'auto';
}