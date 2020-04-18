const colorbox=document.querySelector('.color-box');
const input=document.querySelector('.color-name')

input.addEventListener('keyup',function(){
    colorbox.style.backgroundColor=input.value;
    colorbox.innerText=input.value;
});