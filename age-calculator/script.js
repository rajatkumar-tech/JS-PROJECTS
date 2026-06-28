const user_date = document.querySelector(".user-date");
const btn = document.querySelector(".btn");
const h2 = document.querySelector("h2");

btn.addEventListener("click", () => {
    const currDate = new Date();
    
    // CHANGE 1: dobValue ko andar rakha taaki har click par live value mile
    let dobValue = user_date.value; 

    // 2. Validation Check with 3-second setTimeout
    if (dobValue === "") {
        h2.innerText = "Please enter the DOB";
        h2.style.color = "red";

        // 3 second (3000ms) baad warning message clear karne ke liye
        setTimeout(() => {
            // Check karte hain agar input abhi bhi khali hai toh hi reset karein
            if (user_date.value === "") {
                h2.innerText = "Enter your date of birth";
                h2.style.color = "black";
            }
        }, 3000);

        return; // Niche ka calculation code ruk jayega
    }

    // Agar user ne date select ki hai toh black color ensure karein
    h2.style.color = "black";

    const birthDOB = new Date(dobValue);

    let currYear = currDate.getFullYear();
    let currMonth = currDate.getMonth();
    let currDay = currDate.getDate();

    let birthYear = birthDOB.getFullYear();
    let birthMonth = birthDOB.getMonth();
    let birthDay = birthDOB.getDate();

    let age = currYear - birthYear;

    // Twist Condition: Agar is saal birthday abhi tak nahi aaya hai
    if (currMonth < birthMonth || (currMonth === birthMonth && currDay < birthDay)) {
        age--;
    }

    // Final Output Display
    h2.innerText = `You are ${age} years old`;
});