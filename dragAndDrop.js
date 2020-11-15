const moveThing = document.querySelector(".moveThing");

function handleThingClick() {
  moveThing.addEventListener("mousemove", handleThingMove);
}
function handleThingMove(event) {
  moveThing.style.top = `${event.clientY - 50}px`;
  moveThing.style.left = `${event.clientX - 50}px`;
}
function handleThingUp() {
  moveThing.removeEventListener("mousemove", handleThingMove);
}
if (moveThing) {
  moveThing.addEventListener("mousedown", handleThingClick);
  moveThing.addEventListener("mouseup", handleThingUp);
}
