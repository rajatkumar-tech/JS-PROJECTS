let input = document.querySelector("input");
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
let music = document.querySelector(".music");

btn.addEventListener("click", () => {
  if (input === "" ) {
    alert("Enter the Name");
    
    
  } else {
    let store = input.value;
    input.value ="";
    h2.innerHTML =  `Happy Birthday ${store}`;
    h1.innerHTML = `🍟🍔😍😘🥰`;
    music.currentTime = 0;
    music.play();

  }
});


