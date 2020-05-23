const mainNav=document.querySelector(".main-header");

document.querySelector(".nav-button").addEventListener("click",function(){
    if(mainNav.style.display!=="none"){
        mainNav.style.display="none"
    }else{
        mainNav.style.display="flex";
    }
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        mainNav.style.display="none";
    } else {
        mainNav.style.display="flex";
    }
  }
  
  var x = window.matchMedia("(max-width: 900px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)