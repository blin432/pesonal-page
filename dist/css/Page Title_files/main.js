var enterPlayerOne=document.getElementById("player-one");
var enterPlayerTwo=document.getElementById("player-two");
var playerSelect = document.getElementById("pselect-finish");



function onePlayer(){
    if (enterPlayerTwo.style=""){
     enterPlayerOne.style.setProperty("display","block");
     playerSelect.style.setProperty("display","block");
} else if(enterPlayerTwo.style="block"){
     enterPlayerOne.style.setProperty("display","block");
    enterPlayerTwo.style.setProperty("display","none");
    playerSelect.style.setProperty("display","block");
};

}

function twoPlayers(){
    enterPlayerOne.style.setProperty("display","block");
    enterPlayerTwo.style.setProperty("display","block");
    playerSelect.style.setProperty("display","block");
    
}