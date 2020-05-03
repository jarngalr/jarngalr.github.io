const img=document.querySelectorAll(".mole-img");
const worm= document.querySelector(".worm")
let count=0;
let points=0;
function randomSeconds(){
    return (Math.floor(Math.random()*18+2))*1000;
}

function showScore(){
    count=100;
    if(points>=100){
        points=100;
    }
    let scoreBox=document.querySelector(".score-box");
    scoreBox.style.backgroundColor="crimson";
    scoreBox.style.animationName="change";
    scoreBox.style.animationDuration="5s"
    scoreBox.style.animationTimingFunction="linear";
    document.querySelector(".score").innerText=`Game Over!
Score= ${points}`;
}

// function feedMole(image){
//     // image.classList.add("show-hungry");
//     document.querySelector(".background").addEventListener("click", function(event){
//         if(event.target.tagName==="IMG"){  
//         points=points+1;
//             event.target.classList.remove("show-hungry");
//             event.target.classList.add("show");
//             event.target.src="mole-fed.png"
//             // image.classList.add("show");
//             console.log(`Points=`,points);
//         }
//     })
// }
function clickHandler (event){
    event.target.removeEventListener("click", clickHandler);
    event.currentTarget.classList.remove("show-hungry");
    event.target.classList.add("show-mole");
    
    if(points<97){
        points=points+3;
        console.log(`Points=`,points);
        callFed(event.target);
    }else {
        points=100;
        showScore();
    }
}



function callHungry(imageH){
    imageH.style.display="block";
    imageH.src="./images/mole-hungry.png";
    imageH.classList.add("show-hungry");
//     console.log("Hungry mole Called", Math.floor(Date.now()/1000))

        imageH.addEventListener("click", clickHandler)

    setTimeout(() => {
        
        if(imageH.classList.contains("show-hungry"){
            imageH.removeEventListener("click", clickHandler);
            imageH.classList.add("show-mole");
            imageH.classList.remove("show-hungry");
            callSad(imageH);
            return;
        }
    }, 2000);
    return;
}

function callFed(imageF){
    imageF.src="./images/mole-fed.png";
//     console.log("Fed mole called", Math.floor(Date.now()/1000))

    setTimeout(() => {
        callLeaving(imageF);
    }, 500);
}

function callSad(imageS){
    imageS.src="./images/mole-sad.png"
//     console.log("Sad mole called", Math.floor(Date.now()/1000));

    setTimeout(() => {        
        callLeaving(imageS);
    }, 500);
    
}

function callLeaving(imageL){
//     console.log("Leaving mole called", Math.floor(Date.now()/1000))
    imageL.src="./images/mole-leaving.png"

    setTimeout(() => {
        imageL.style.display="none";
        callMole(imageL);
    }, 500);
}

// function feedKingMole(image){
//     // image.classList.add("show-hungry");
//     document.querySelector(".background").addEventListener("click", function(event){
//         if(event.target.tagName==="IMG"){  
//         points=points+1;
//             event.target.classList.remove("show-hungry");
//             event.target.classList.add("show");
//             event.target.src="./images/mole-fed.png"
//             // image.classList.add("show");
//             console.log(`Points=`,points);
//         }
//     })
// }
function clickHandlerK (event){
    event.target.removeEventListener("click", clickHandlerK);
    event.target.classList.remove("show-hungry");
    event.target.classList.add("show-mole");
      
    if(points<94){
        points=points+6;
        console.log(`Points=`,points);
        callKingFed(event.target); 
    }else{
        points=100;
        showScore();
    }
}

function callKingHungry(imageKH){
    imageKH.style.display="block";
    imageKH.src="./images/king-mole-hungry.png";
    imageKH.classList.add("show-hungry");
//     console.log("Hungry King Mole Called", Math.floor(Date.now()/1000))

        imageKH.addEventListener("click", clickHandlerK)

    setTimeout(() => {
        
        if(imageKH.classList.contains("show-hungry"){
            imageKH.removeEventListener("click", clickHandlerK);
            imageKH.classList.remove("show-hungry");
            imageKH.classList.add("show-mole");
            callKingSad(imageKH);
        }
    }, 2000);
}

function callKingFed(imageKF){
    imageKF.src="./images/king-mole-fed.png";
//     console.log("Fed King Mole called", Math.floor(Date.now()/1000));

    setTimeout(() => {
        callKingLeaving(imageKF);
    }, 500);
}

function callKingSad(imageKS){
    imageKS.src="./images/king-mole-sad.png"
//     console.log("Sad King mole called", Math.floor(Date.now()/1000))
    setTimeout(() => {
        callKingLeaving(imageKS);
    }, 500);
    
}

function callKingLeaving(imageKL){
//     console.log("Leaving King mole called", Math.floor(Date.now()/1000))
    imageKL.src="./images/king-mole-leaving.png"
    
    setTimeout(() => {
        imageKL.style.display="none";
        callMole(imageKL);
    }, 500);
}

// function callDelay(image){
//     setTimeout(() => {
//         console.log("Delay called", Math.floor(Date.now()/1000))
//         image.classList.remove("show");
//         image.classList.remove("show-hungry");
//         callMole(image);
//     },500);
// }

function continueGame(imageC){

    console.log("Mole called on time=", Math.floor(Date.now()/1000),`

Mole Count=`,count)
    let random=Math.floor(Math.random()*18+2);

    if(random!=5){
            callHungry(imageC);
    }else{
            callKingHungry(imageC);
        return;
    }
}

function callMole(imageM){
    worm.style.maxWidth=`1660px`
    worm.style.width = `${points}%`;
    count=count+1;
    setTimeout(() => {
        if(count<100 && points<100){
            // wormImg.maxWidth="100%"
            // wormImg.width=`${points}%`;
            continueGame(imageM);
            return;
        }else{
            showScore();
            console.log(`Game Over
Your total points=`,points)
            return;
        }
    }, randomSeconds());
    return;
}

function startGame(){
    document.querySelector(".score-box").style.backgroundColor="transparent";
    document.querySelector(".score").innerText=``;
    count=0;
    points=0;
    // wormImg.width="0%"
    console.log(`Game Started`);
    for(let i=0; i<10; i++){
        callMole(img[i]);
    }
}

document.querySelector("button").addEventListener("click",function(){
    startGame();
});
