// const BREEDS_URL='https://dog.ceo/api/breeds/image/random';

// function addDoggo(breeds_url){
//   document.querySelector("span").style.display="block";

//   fetch(breeds_url)
//     .then(function(response){
//       return response.json();
//     })
//     .then(function(data){
//       console.log(data);
//       console.log(data.message);
//       const img = document.querySelector('img');
//       document.querySelector("span").style.display="none";
//       img.src=data.message;
//   });
  

// }

// document.querySelector('.add-doggo').addEventListener('click', addDoggo);

const BREEDS_URL='https://dog.ceo/api/breeds/list/all';
const select=document.querySelector('.breeds');
const image= document.querySelector('img')



fetch(BREEDS_URL)
  .then(response=>{
    return response.json();
  })
  .then(data=>{
    const breedsObject= data.message;
    const breedsArray=Object.keys(breedsObject);
    // console.log(breedsArray);
    const option=document.createElement("option");
      option.value="Select breed";
      option.innerText="--Select breed--";
      select.appendChild(option);
    for(let i=1; i<=breedsArray.length; i++){
      const option=document.createElement("option");
      option.value=breedsArray[i-1];
      option.innerText=breedsArray[i];
      select.appendChild(option);
    }
});

select.addEventListener("change", function(event){

  if (select.value!="Select breed"){
  getDoggo(`https://dog.ceo/api/breed/${select.value}/images/random`);
  }
});

const img=document.querySelector(".dog-img");
const spinner=document.querySelector(".spinner")
function getDoggo(url){
  img.classList.remove("show");
  spinner.classList.add("show");
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      img.src=data.message
      // spinner.classList.remove("show");
      // img.classList.add("show");

    })
}

img.addEventListener("load",function(){
  spinner.classList.remove("show");
  img.classList.add("show");
})
