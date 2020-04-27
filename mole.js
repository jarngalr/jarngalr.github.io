const img=document.querySelectorAll(".mole-img");
const worm= document.querySelector(".worm")
let count=0;
let points=0;

function randomSeconds(){
    return (Math.floor(Math.random()*18+2))*1000;
}

function showScore(){
    let scoreBox=document.querySelector(".score-box");
    scoreBox.style.backgroundColor="crimson";
    scoreBox.style.animationName="spin";
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


function callHungry(image){
    image.src="./images/mole-hungry.png";
    image.classList.add("show-hungry");
    console.log("Hungry mole Called", Math.floor(Date.now()/1000))
    if(points<100 && count<100){
        image.addEventListener("click", function(event){
                points=points+1;
                event.currentTarget.classList.remove("show-hungry");
                event.currentTarget.src="./images/mole-fed.png"
                image.classList.add("show");
                // image.classList.add("show");
                console.log(`Points=`,points);
                callFed(image);
        })
    }
    callSad(image);
}

function callFed(image){
    setTimeout(() => {
        // image.classList.add("show");
        console.log("Fed mole called", Math.floor(Date.now()/1000))
        callLeaving(image);
    }, 500);
}

function callSad(image){
    
    setTimeout(() => {
        // image.classList.add("show");
        console.log("Sad mole called", Math.floor(Date.now()/1000))
        image.src="./images/mole-sad.png"
        callLeaving(image);
    }, 2000);
    
}

function callLeaving(image){
    setTimeout(() => {
        console.log("Leaving mole called", Math.floor(Date.now()/1000))
        image.src="./images/mole-leaving.png"
        callDelay(image);
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

function callKingHungry(image){
    image.src="./images/king-mole-hungry.png";
    image.classList.add("show-hungry");
    console.log("Hungry King Mole Called", Math.floor(Date.now()/1000))
    if(points<100 && count<100){
        image.addEventListener("click", function(event){
            points=points+1;
            event.currentTarget.classList.remove("show-hungry");
            image.classList.add("show");
            event.currentTarget.src="./images/king-mole-fed.png"
            // image.classList.add("show");
            console.log(`Points=`,points);
            callKingFed();
        })
    }
    callKingSad(image);
   
}

function callKingFed(image){
    // image.classList.add("show");
    setTimeout(() => {
        // image.classList.remove("show-hungry");
        console.log("Fed King Mole called", Math.floor(Date.now()/1000))
        callKingLeaving(image);
    }, 500);
}

function callKingSad(image){
    image.classList.add("show");
    setTimeout(() => {
        // image.classList.remove("show-hungry");
        console.log("Sad King mole called", Math.floor(Date.now()/1000))
        image.src="./images/king-mole-sad.png"
        callKingLeaving(image);
    }, 3000);
    
}

function callKingLeaving(image){
    setTimeout(() => {
        console.log("Leaving King mole called", Math.floor(Date.now()/1000))
        image.src="./images/king-mole-leaving.png"
        callDelay(image);
    }, 500); 
}

function callDelay(image){
    setTimeout(() => {
        console.log("Delay called", Math.floor(Date.now()/1000))
        image.classList.remove("show");
        image.classList.remove("show-hungry");
        callMole(image);
    },500);
}

function continueGame(image){

    console.log("Mole called on time=", Math.floor(Date.now()/1000),`
Mole Count=`,count)
    let random=Math.floor(Math.random()*18+2);

    if(random!=5){
            callHungry(image);
    }else{
            callKingHungry(image);
        return;
    }
}

function callMole(image){
    worm.style.width = `${points}%`;
    count=count+1;
    setTimeout(() => {
        if(count<100 && points<=100){
            // wormImg.maxWidth="100%"
            // wormImg.width=`${points}%`;
            continueGame(image);
            return;
        }else{
            showScore();
            console.log(`Game Over
Your total points=`,points)
            return;
        }
    }, randomSeconds());
    
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