// function alertMe() {
//   alert("Thank your for being very slient!");
// }
// // const timer = setTimeout(alertMe, 3000);
// setInterval(alertMe, 3000);
let circle = document.getElementById("circle");
let x, y, step, timer;
(x = 0), (y = 0);

function startAnimation() {
  timer = setInterval(function () {
    if (y === 0 && x < 450) x += 5;
    else if (x === 450 && y < 450) y += 5;
    else if (y === 450 && x > 0) x -= 5;
    else y -= 5;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  }, 1);
}
function stopAnimation() {
  clearInterval(timer);
}
