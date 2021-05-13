const button = document.getElementById("ball");
const visible = document.querySelectorAll("h1");
const themes = [
  [
    "rgba(252, 92, 156, 0.5)",
    "rgba(243, 127, 173, 0.6)",
    "rgba(253, 198, 219, 0.952)",
  ],
  ["#f0f696", "#96f7d2", "#fbfdc7"],
  ["#364f6b", "#324761", "#ff6262ee"],
];
let number = 0;
button.addEventListener("click", () => {
  button.classList.toggle("dot2");
  visible[0].classList.toggle("show");
  number++;
  number = number == themes.length ? number % themes.length : number;
  console.log(number);
  document.documentElement.style.setProperty("--primary", themes[number][0]);
  document.documentElement.style.setProperty("--secondary", themes[number][1]);
  document.documentElement.style.setProperty("--ball", themes[number][2]);
});
