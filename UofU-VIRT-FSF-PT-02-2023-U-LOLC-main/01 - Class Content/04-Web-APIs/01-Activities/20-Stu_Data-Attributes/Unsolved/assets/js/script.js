var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
console.log(element.dataset.number);
element.innerText = element.dataset.number;
element.dataset.state = "clicked";
if(element.dataset.state === "hidden"){
  element.dataset.state = "clicked";

} else 
  // TODO: Complete function
});
