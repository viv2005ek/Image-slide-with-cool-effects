console.log("Hello World");


const forLoaderBody=document.body.querySelector(".forLoaderBody");
const containerLoader=document.body.querySelector(".containerLoader");

window.addEventListener("load",(e)=>{
  setTimeout(()=>{
    containerLoader.style.display="none";
    forLoaderBody.classList.remove("forLoaderBody");
  }, 3000);  //3 second delay
})







const slider = document.querySelector(".cardClick");
const slideImg = document.querySelectorAll(".cardClick img");
const width = slideImg[0].clientWidth; 
let counter = -width;

slider.addEventListener("dblclick", () => {
  slideImg.forEach(img => {
    img.style.transform = `translateX(${counter}px)`;
  });

  counter -= width;

  if (counter === -4 * width) {
    counter = 0;
  }
}); 

const sliderMask = document.querySelector(".cardClickMask");
const slideMaskImg = document.querySelectorAll(".cardClickMask img");
const widthM = slideImg[0].clientWidth; 
let counterM = -widthM;

sliderMask.addEventListener("click", () => {
  slideMaskImg.forEach(img => {
    img.style.transform = `translateX(${counter}px)`;
  });

  counter -= widthM;

  if (counter === -4 * widthM) {
    counter = 0;
  }
}); 


const cardAutoByJS = document.querySelector(".cardAutoByJS");
const slideAutoByJS = document.querySelectorAll(".cardAutoByJS img");

let positionX = 0;

function animate() {
    setTimeout(() => {
        if (positionX === -4 * width) {
            positionX = 0;
        }
        slideAutoByJS.forEach(image => {
            image.style.transform = `translateX(${positionX}px)`;
        });

        
      positionX -= width; 

        requestAnimationFrame(animate);
    }, 3000);
}


requestAnimationFrame(animate); //animate()























const allImages = document.querySelectorAll("img");

allImages.forEach(image => {
    image.setAttribute("loading", "lazy");
});


