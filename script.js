window.onload = function() {
    auStarting.play()
    setTimeout(function(){
        launchImg3.className = "hide";
        launchImg2.className = "z-index-more";
        setTimeout(function(){
            launchImg2.className = "hide";
            launchImg1.className = "z-index-more";
        }, 1000);
    }, 2000);
}
launchImg1.onclick = function() {
    launchImg1.className = "hide";
    firstMenu.className = "show";
}
startGame.onclick = function() {
    firstMenu.className = "hide";
    startMenu.className = "show";
}
function tagh() {
    auTagh.play();
}
startBtn.onclick = function() {
    gamePlay.className = "show";
    startMenu.className = "hide";
    header.className = "show";
    footer.className = "show";
    auStarting.pause();
    auStartGame.play();
}
gamePlay.onclick = function(e) {
    let pos;
    if(e.pageX / 11 > 70){
        pos =e.pageX /11 - 8 + "%" ;
    }else if(e.pageX / 11 < 50){
        pos =e.pageX /11-20 + "%" ;
    }else if(e.pageX / 11 < 60){
        pos =e.pageX /11-15 + "%" ;
    }else if(e.pageX / 11 > 60){
        pos =e.pageX /11-13 + "%" ;
    }else if(e.pageX / 11 > 80){
        pos =e.pageX /11-10 + "%" ;
    }else if(e.pageX / 11 < 87){
        pos =e.pageX /11-12 + "%" ;
    }else if(e.pageX / 11 < 42){
        pos = +0+ "%" ;
    }

    if( player.style.left < pos ){
        char.classList.remove("charRight");
        char.classList.add("charLeft");
    }else if(player.style.left > pos){
        char.classList.remove("charLeft");
        char.classList.add("charRight");
    }

    player.style.left =pos ;
    char.classList.add("walk");
    walkAu.play();
    setTimeout(function(){char.classList.remove("walk");;walkAu.pause();},500)
    if(e.pageX / 11 > 87){
        pos = + "%" ;
        //console.log("Its Ok!");
    }
}
Goldan.onclick = function(){
    angle.className="angle1";
    setTimeout(function(){angle.className="angle2"},700)
}
Comod.onclick = function(){
    angle.className="angle2";
    setTimeout(function(){PleasWait.className = "show";},700)
    setTimeout(function(){
        angle.className="angle3";
        marbles.className = "show"+" pointer";
        marker.className = "show"+" pointer";
        PleasWait.className = "hide";
    },2500)
}
function goToDoor(n){
    setTimeout(function(){doorAu.play()},600)
    setTimeout(function(){
        player.style.left = "";
        player.className = "player"+n;
        setTimeout(function(){
            player.className = "player"+n + " show";
            closeDoorAu.play();
        },300)
    },700)
}
grandma.onclick = function(){
    angle.className="angle3";
    setTimeout(function(){
        player.className ="painting";
        paintingAu.play();
        setTimeout(function(){
            player.className ="player1 show";
            grandma.className = "hide";
            grandmaP.className = "pointer grandma show";
            angle.className="";
            marker.className = "hide";
            afterPaintingAu.play();
            setTimeout(function(){
                angryMode();
                walkNeighborAu.play();
            },1500)
    },1700)},500)
}
function addClass(id){
    id.className = "show pointer shadow";
    let flag = 1;
    if(flag== 0){
        id.className = "show pointer";
        flag = 0;
    }else
    if(flag== 1){
        id.className = "show pointer shadow";
        flag = 1;
    }
}
function angry(){
    setTimeout(function(){
        walkNeighborAu.pause();
        angryNeighborAu.play();
        footer.className = "hide";
        rage.className = "show";
        walkAu.pause();
    },1000)
        
}
function angryMode(){
    neighbor.className = "angryNeighbor";
    setTimeout(function(){
        if(player.className != "player1 show"){
            neighbor.className = "neighbor2";
            angry();
            setTimeout(function(){
            win.className ="show";
            viwers.play();
            gamePlay.className = "hide";
            },3000)
        }else if(player.className == "player1 show"){
            neighbor.className = "neighbor3";
            angry();
            setTimeout(function(){
                char.className ="show player5";
            },1500)
            setTimeout(function(){
            gamePlay.className = "hide";
            },3000)
        }
    },2000);
}
