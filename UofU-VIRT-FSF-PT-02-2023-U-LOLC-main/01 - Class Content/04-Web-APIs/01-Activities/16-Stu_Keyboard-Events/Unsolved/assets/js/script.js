function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN event";
  document.querySelector("key").innerHTML = event.key
  document.querySelector("key").innerHTML = event.code

}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction)
// TODO: Add Event Listener for "keydown" event


