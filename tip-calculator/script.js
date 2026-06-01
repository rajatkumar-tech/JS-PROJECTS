const num = document.querySelector(".num");
const per = document.querySelector(".per");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".to");

btn.addEventListener("click", (evt) =>{
    evt.preventDefault();

    let numValue = parseFloat(num.value)
    let perValue = parseFloat(per.value);

    if(isNaN(numValue) || isNaN(perValue)){
        alert("please enter the value");
        return;
    }

    let calPer = (numValue * perValue) /100;
    

    let addmsg = numValue + calPer;
    

    msg.innerText = `Total : ${addmsg}`;
})