const button = document.getElementById("ball");
const visible = document.querySelectorAll("h1");
console.log(visible);
button.addEventListener("click", () => {
  button.classList.toggle("dot2");
  visible[0].classList.toggle("show");
});
