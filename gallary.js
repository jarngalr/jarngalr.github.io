const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');
const gallaryImg=document.querySelectorAll('.gallary-image');
let currentSelected=0;

prevBtn.addEventListener('click', function(){
    gallaryImg[currentSelected].classList.remove('active');
    currentSelected--;
    gallaryImg[currentSelected].classList.add('active');
    nextBtn.disabled = false;
    if(currentSelected===0){
        prevBtn.disabled=true;
    }
});

nextBtn.addEventListener('click', function(){
    gallaryImg[currentSelected].classList.remove('active');
    currentSelected++;
    gallaryImg[currentSelected].classList.add('active');
    prevBtn.disabled = false;
    if(currentSelected+1===gallaryImg.length){
        nextBtn.disabled=true;
    }
});

