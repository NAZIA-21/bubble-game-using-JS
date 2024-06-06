var timer= 60;
var score= 0;
var rn=0;
function incScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent= score;
}
function makeBubble(){
    var clutter="";
    for(var i=1; i<=160; i++){
        var rn= Math.floor(Math.random()*10);
        clutter+= ` <div class="Bubble">${rn}</div>`;
    }
    document.querySelector("#pannelBottom").innerHTML= clutter;
    
}

function runTimer(){
    var timerInteval= setInterval(function(){
        if(timer> 0){
            timer--;
            document.querySelector("#timerVal").textContent= timer;
        } else{
            clearInterval(timerInteval);
            document.querySelector("#pannelBottom").innerHTML= `<h1>Game Over</h1>`;
        }
        
    }, 1000)

}
function getNewHit(){
    rn= Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent= rn;

}
document.querySelector("#pannelBottom").addEventListener("click", function (details){
    var clickedNum= Number(details.target.textContent);
    if(clickedNum=== rn){
        incScore();
        makeBubble();
        getNewHit();
    }
});
makeBubble();
runTimer();
getNewHit();
