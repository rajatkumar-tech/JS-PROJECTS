const user_date = document.querySelector(".user-date");
const btn = document.querySelector(".btn");
const h2 = document.querySelector("h2");



btn.addEventListener("click", ()=>{
    const currDate = new Date();
    
    let dobValue = user_date.value;
    console.log(dobValue);
    
})