const countEl = document.querySelector(".count");

// SOLUTION 1: 

// const decrementBtn = document.querySelector(".decrement");
// const resetBtn = document.querySelector(".reset");
// const incrementBtn = document.querySelector(".increment");

// decrementBtn.addEventListener("click", () => {
//   countEl.innerHTML--;
// });

// incrementBtn.addEventListener("click", () => {
//   countEl.innerHTML++;
// });

// resetBtn.addEventListener("click", () => {
//   countEl.innerHTML = 0;
// });

// SOLUTION 2:

const buttonsEl = document.querySelector(".buttons");

buttonsEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("increment")) {
    // console.log("Increment");
    countEl.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("decrement")) {
    // console.log("Decrement");
    countEl.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    // console.log("Reset");
    countEl.innerHTML = 0;
  }
});

function setColor() {
  if (countEl.innerHTML < 0 ){
    countEl.style.color = "red";
  } else if (countEl.innerHTML > 0 ){
    countEl.style.color = "green";
  }  else {
    countEl.style.color = "white";
  }
}