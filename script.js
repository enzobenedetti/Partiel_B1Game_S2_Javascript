var turn = 0;
var activeGame = false;
var activeGameDuo = false;
var activeGameSolo = false;
var botCorner = false;
var botCenter = false;
var botWall = false;
var blueScore = 0;
var redScore = 0;
var botPlayed = false;
var doublePlay = null;
var win = false;
var winGrid = null;
var place = true;
gridGame = ["blank1", "blank2", "blank3", "blank4", "blank5", "blank6", "blank7", "blank8", "blank9"];
gridPlayed = [false, false, false, false, false, false, false, false, false];

function resetGrid(){
    document.getElementById("11").src = "assets\\grid.png";
    document.getElementById("12").src = "assets\\grid.png";
    document.getElementById("13").src = "assets\\grid.png";
    document.getElementById("21").src = "assets\\grid.png";
    document.getElementById("22").src = "assets\\grid.png";
    document.getElementById("23").src = "assets\\grid.png";
    document.getElementById("31").src = "assets\\grid.png";
    document.getElementById("32").src = "assets\\grid.png";
    document.getElementById("33").src = "assets\\grid.png";
    turn = 0;
    gridGame = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    gridPlayed = [false, false, false, false, false, false, false, false, false];
}

function checkPlace(gridplace){
    if (gridplace == "11" && gridGame[0] != "red" && gridGame[0] != "blue"){
        place = true;
    }
    else if (gridplace == "12" && gridGame[1] != "red" && gridGame[1] != "blue"){
        place = true;
    }
    else if (gridplace == "13" && gridGame[2] != "red" && gridGame[2] != "blue"){
        place = true;
    }
    else if (gridplace == "21" && gridGame[3] != "red" && gridGame[3] != "blue"){
        place = true;
    }
    else if (gridplace == "22" && gridGame[4] != "red" && gridGame[4] != "blue"){
        place = true;
    }
    else if (gridplace == "23" && gridGame[5] != "red" && gridGame[5] != "blue"){
        place = true;
    }
    else if (gridplace == "31" && gridGame[6] != "red" && gridGame[6] != "blue"){
        place = true;
    }
    else if (gridplace == "32" && gridGame[7] != "red" && gridGame[7] != "blue"){
        place = true;
    }
    else if (gridplace == "33" && gridGame[8] != "red" && gridGame[8] != "blue"){
        place = true;
    }
    else place = false;
}

function checkGrid(color, gridplace){
    if (gridplace == "11"){
        gridGame[0] = color;
        gridPlayed[0] = true;
    }
    if (gridplace == "12"){
        gridGame[1] = color;
        gridPlayed[1] = true;
    }
    if (gridplace == "13"){
        gridGame[2] = color;
        gridPlayed[2] = true;
    }
    if (gridplace == "21"){
        gridGame[3] = color;
        gridPlayed[3] = true;
    }
    if (gridplace == "22"){
        gridGame[4] = color;
        gridPlayed[4] = true;
    }
    if (gridplace == "23"){
        gridGame[5] = color;
        gridPlayed[5] = true;
    }
    if (gridplace == "31"){
        gridGame[6] = color;
        gridPlayed[6] = true;
    }
    if (gridplace == "32"){
        gridGame[7] = color;
        gridPlayed[7] = true;
    }
    if (gridplace == "33"){
        gridGame[8] = color;
        gridPlayed[8] = true;
    }
}

function checkDouble(){
    doubleBlue = false;
    doubleRed = false;
    if (gridPlayed[0]){
        if (gridGame[0] == gridGame[1]){
            doublePlay = "13";
        }
        else if (gridGame[0] == gridGame[3]){
            doublePlay = "31";
        }
        else if (gridGame[0] == gridGame[4]){
            doublePlay = "33";
        }
    }
    else if (gridPlayed[1]){
        if (gridGame[1] == gridGame[4]){
            doublePlay = "32";
        }
        else if (gridGame[1] == gridGame[2]){
            doublePlay = "11";
        }
    }
    else if (gridPlayed[2]){
        if (gridGame[2] == gridGame[4]){
            doublePlay = "31";
        }
        else if (gridGame[2] == gridGame[5]){
            doublePlay = "33";
        }
    }
    else if (gridPlayed[3]){
        if (gridGame[3] == gridGame[6]){
            doublePlay = "11";
        }
        else if (gridGame[3] == gridGame[4]){
            doublePlay = "23";
        }
    }
    else if (gridPlayed[4]){
        if (gridGame[4] == gridGame[5]){
            doublePlay = "21";
        }
        else if (gridGame[4] == gridGame[6]){
            doublePlay = "13";
        }
        else if (gridGame[4] == gridGame[7]){
            doublePlay = "21";
        }
        else if (gridGame[4] == gridGame[8]){
            doublePlay = "11";
        }
    }
    else if (gridPlayed[5]){
        if (gridGame[5] == gridGame[8]){
            doublePlay = "13";
        }
    }
    else if (gridPlayed[7]){
        if (gridGame[7] == gridGame[6]){
            doublePlay = "33";
        }
        else if (gridGame[7] == gridGame[8]){
            doublePlay = "31";
        }
    }
}

function checkWin(){
    //Top Line
    if (gridGame[0] == gridGame[1] && gridGame[0] == gridGame[2]){
        win = true;
        winGrid = gridGame[0];
    }
    //Middle Horizontal
    else if (gridGame[3] == gridGame[4] && gridGame[3] == gridGame[5]){
        win = true;
        winGrid = gridGame[3];
    }
    //Bottom
    else if (gridGame[6] == gridGame[7] && gridGame[6] == gridGame[8]){
        win = true;
        winGrid = gridGame[6];
    }
    //Left
    else if (gridGame[0] == gridGame[3] && gridGame[0] == gridGame[6]){
        win = true;
        winGrid = gridGame[0];
    }
    //Middle Vertical
    else if (gridGame[1] == gridGame[4] && gridGame[1] == gridGame[7]){
        win = true;
        winGrid = gridGame[1];
    }
    //Right
    else if (gridGame[2] == gridGame[5] && gridGame[2] == gridGame[8]){
        win = true;
        winGrid = gridGame[2];
    }
    //Diagonal 1
    else if (gridGame[0] == gridGame[4] && gridGame[0] == gridGame[8]){
        win = true;
        winGrid = gridGame[0];
    }
    //Diagonal 2
    else if (gridGame[2] == gridGame[4] && gridGame[2] == gridGame[6]){
        win = true;
        winGrid = gridGame[2];
    }
    if (win){
        if (winGrid == "blue"){
            blueScore++;
            document.getElementById("scoreblue").innerHTML = "Blue : " + blueScore;
            activeGame = false;
            window.alert("Blue Win !");
            resetGrid();
        }
        else{
            redScore++;
            document.getElementById("scorered").innerHTML = "Red :" + redScore;
            activeGame = false;
            window.alert("Red Win !");
            resetGrid();
        }
    }
    else if (turn > 8){
        activeGame = false;
        window.alert("It's a draw...");
        resetGrid();
    }
}

function botTurn(){
    botPlayed = false;
    if (turn == 1){
        if (gridGame[0] == "red" || gridGame[2] == "red" || gridGame[6] == "red" || gridGame[8] == "red"){
            checkPlace("22")
            if (place){
                gridPlay = document.getElementById("22");
                gridPlay.src = "assets\\gridblue.png";
                checkGrid("blue", "22");
                botCorner = true;
            }
        }
        else if (gridGame[4] == "red"){
            checkPlace("11")
            if (place){
                gridPlay = document.getElementById("11");
                gridPlay.src = "assets\\gridblue.png";
                checkGrid("blue", "11");
                botCenter = true;
            }
        }
        else if (gridGame[1] == "red" || gridGame[3] == "red" || gridGame[5] == "red" || gridGame[7] == "red"){
            checkPlace("22");
            if (place){
                gridPlay = document.getElementById("22");
                gridPlay.src = "assets\\gridblue.png";
                checkGrid("blue", "22");
                botWall = true;
            }
        }
    }
    else {
        checkDouble();
        if (doublePlay){
            checkPlace(doublePlay);
            if (place){
                gridPlay = document.getElementById(doublePlay);
                gridPlay.src = "assets\\gridblue.png";
                checkGrid("blue", doublePlay);
                botPlayed = true;
            }
        }
        if (!botPlayed && botWall){
            checkPlace("11");
        }
    }
}

function gridClicked(grid){
    checkPlace(grid.id);
    if (activeGame && place){
        if (turn%2 == 1){
            grid.src = "assets\\gridblue.png";
            checkGrid("blue", grid.id);
        }
        else {
            grid.src = "assets\\gridred.png";
            checkGrid("red", grid.id);
        }
        turn++;
        checkWin();
        if (activeGameSolo){
            botTurn();
            turn++;
            checkWin();
        }
    }
}

function startGameDuo(){
    if (!activeGame){
        window.alert("Game Start !");
        activeGame = true;
        activeGameSolo = false;
        activeGameDuo = true;
        win = false;
    }
}

function startGameSolo(){
    if (!activeGame){
        window.alert("Game Start ! (You are red)");
        activeGame = true;
        activeGameSolo = true;
        activeGameDuo = false;
        win = false;
        botCorner = false;
        botCenter = false;
        botWall = false;
    }
}