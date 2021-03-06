const button = document.getElementById("ball");
const visible = document.querySelectorAll("h1");
const click = document.getElementsByClassName("box");
const themes = [
  [
    "rgba(252, 92, 156, 0.5)",
    "rgba(243, 127, 173, 0.6)",
    "rgba(253, 198, 219, 0.952)",
  ],
  ["#f0f696", "#96f7d2", "#fbfdc7", "#fbfdc7"],
  ["#364f6b", "#324761", "#ff6262ee", "#ff6262ee"],
  ["#b4da55", "#92b146", "#f42069", "#f42069"],
  ["#d12626", "#f5eded", "#e92b2b", "#f5eded"],
];
let number = 0;
click[0].addEventListener("click", () => {
  button.classList.toggle("dot2");
  visible[0].classList.toggle("show");
  number++;
  number = number == themes.length ? number % themes.length : number;
  document.documentElement.style.setProperty("--primary", themes[number][0]);
  document.documentElement.style.setProperty("--secondary", themes[number][1]);
  document.documentElement.style.setProperty("--ball", themes[number][2]);
  document.documentElement.style.setProperty("--text", themes[number][3]);
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", themes[number][0]);
  console.log(number);
});

//red greeb blue rgb  red rgb(255,0,0)  #ff0000
