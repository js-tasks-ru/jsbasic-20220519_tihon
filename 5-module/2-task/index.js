function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");
  btn.addEventListener("click", () => {
    if (text.hidden == false){
      text.hidden = true;
    } else{
      text.hidden = false;
    }
  });
}

// function toggleText() {
//   if (text.style.display == "block"){
//     text.style.display="none";
//   }else{
//     text.style.display="block";
//   }
// }

// btn.addEventListener("click", toggleText);
