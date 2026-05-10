let pound = document.querySelector(".pound");
let msg = document.querySelector(".msg");

let onePound = 0.453592;
let num;
let total;

pound.addEventListener("input", async (evt) => {
  num = parseFloat(pound.value);
  await mesError();

 
 
});

const mesError = () => {
  if (isNaN(num) || num <=0) {
    msg.innerText = "Please enter the vaild number";
    msg.style.color = "red";
    
    setTimeout(() => {
      msg.innerText = `Your weight in kg is :`;
      msg.style.color = "black";
      pound.value = "";
    }, 3000);
  } else {
    total = num * onePound;
    msg.innerText = `Your weight in kg is : ${total.toFixed(2)}`;
    msg.style.color = "green";
  }
};


