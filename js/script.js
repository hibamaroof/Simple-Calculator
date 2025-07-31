// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll(".buttons button");
// const equalBtn = document.querySelector(".equal");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const value = button.textContent;

//     if (value === "Del") {
//       display.textContent = "";
//     } else if (value === "X") {
//       display.textContent += "*";
//     } else {
//       display.textContent += value;
//     }
//   });
// });
// equalBtn.addEventListener("click", () => {
//   display.textContent = eval(display.textContent);
// });

const display = document.querySelector(".display");
const equalBtn = document.querySelector(".equal");

function DisplayOutput(button) {
  const btnValue = button.value;

  if (btnValue === "Del") {
    display.textContent = "";
  } else if (btnValue === "X") {
    display.textContent += "*";
  } else {
    display.textContent += btnValue;
  }
}
equalBtn.addEventListener("click", () => {
  display.textContent = eval(display.textContent);
});
