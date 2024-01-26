var name1=prompt("Enter Player 1 name: ");
var name2=prompt("Enter Player 2 name: ");
document.querySelector("#player1>h2").textContent=name1;
document.querySelector("#player2>h2").textContent=name2;

var rand1 =Math.random(); // 0-0.9999
rand1 = rand1*6; // 0-5.9999
rand1=Math.floor(rand1)+1; // 1-6
var rand2 =Math.random(); // 0-0.9999
rand2 = rand2*6; // 0-5.9999
rand2=Math.floor(rand2)+1; // 1-6
if(rand1 === 1){
    document.querySelector("#dice1>img").setAttribute("src","./images/dice1.png");
}
else if(rand1 === 2){
    document.querySelector("#dice1>img").setAttribute("src","./images/dice2.png");

}
else if(rand1 === 3){
    document.querySelector("#dice1>img").setAttribute("src","./images/dice3.png");

}
else if(rand1 === 4){
    document.querySelector("#dice1>img").setAttribute("src","./images/dice4.png");

}
else if(rand1 === 5){
    document.querySelector("#dice1>img").setAttribute("src","./images/dice5.png");

}
else if(rand1 === 6){
    document.querySelector("#dice1>img").setAttribute("src","./images/dice6.png");

}
if(rand2 === 1){
    document.querySelector("#dice2>img").setAttribute("src","./images/dice1.png");
}
else if(rand2 === 2){
    document.querySelector("#dice2>img").setAttribute("src","./images/dice2.png");

}
else if(rand2 === 3){
    document.querySelector("#dice2>img").setAttribute("src","./images/dice3.png");

}
else if(rand2 === 4){
    document.querySelector("#dice2>img").setAttribute("src","./images/dice4.png");

}
else if(rand2 === 5){
    document.querySelector("#dice2>img").setAttribute("src","./images/dice5.png");

}
else if(rand2 === 6){
    document.querySelector("#dice2>img").setAttribute("src","./images/dice6.png");

}
if (rand1 === rand2){
    document.querySelector(".heading>div").textContent="Draw!";
}
else if (rand1>rand2){
    document.querySelector(".heading>div").textContent=name1+ " Wins!";
}
else {
    document.querySelector(".heading>div").textContent=name2+ " Wins!";
}
