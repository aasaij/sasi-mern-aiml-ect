let divElement = document.getElementById("d1");
for (let x = 1; x <= 100; x++) {
  let but1 = document.createElement("button");
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  but1.setAttribute(
    "style",
    `padding:10px;margin:4px;width:100px;height:100px;background-color:rgb(${red},${green},${blue});`
  );
  but1.textContent = x + "";
  divElement.appendChild(but1);
}
