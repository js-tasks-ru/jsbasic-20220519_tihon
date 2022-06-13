function hideSelf() {
  let btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    btn.hidden = true;
  });
}

// function hideSelf() {
//   btn.onclick = () => {
//     btn.hidden = true;
//   }
// }