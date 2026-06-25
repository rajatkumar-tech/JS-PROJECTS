const user_date = document.querySelector(".user-date");
const btn = document.querySelector(".btn");
const h2 = document.querySelector("h2");



btn.addEventListener("click", ()=>{
    const currDate = new Date();
    console.log(currDate);
    
    let dobValue = user_date.value;


    if(dobValue === ""){
        h2.innerText = "Please enter the DOB";
        h2.style.color = "red";
        return;
    }

    h2.style.color = "black";

    const birthDOB = new Date(dobValue);

    let currYear = currDate.getFullYear();
    let currMonth = currDate.getMonth();
    let currDay = currDate.getDate();

    let birthYear = birthDOB.getFullYear();
    let birthMonth = birthDOB.getMonth();
    let birthDay = birthDOB.getDate();
    

    let age = currYear - birthYear;

    console.log(age);

    if(currMonth <birthMonth || (currMonth === birthMonth && currDay < birthDay)){
        age--;
    }

    h2.innerText  = `You are ${age} years old`
    
    
})