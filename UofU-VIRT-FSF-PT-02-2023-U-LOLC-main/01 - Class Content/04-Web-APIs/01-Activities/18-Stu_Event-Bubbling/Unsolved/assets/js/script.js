// TODO: Which element is the following line of code selecting? 
//it selects the div class carouselbox.
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
//the button class next.
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
//wIt is listion for you to click on the image.
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//wating for you to click next.
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  //The method prevents propagation of the same event from being called.
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
//It is listing for you to click the Previous.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    //pthe image would come up. 
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
