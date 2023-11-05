let btn = document.getElementById("btn");
let div = document.getElementById("demo");
btn.addEventListener("click", function () {
  let w = document.getElementById("width").value;
  div.style.width = w + "px";
  let h = document.getElementById("height").value;
  div.style.height = h + "px";
  let c = document.getElementById("color").value;
  div.style.backgroundColor = c;
  let border = document.getElementById("border-radius").value;
  div.style.borderRadius = border + "%";
});
