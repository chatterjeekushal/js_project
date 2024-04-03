

let currDate= document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge= document.getElementById("CalcAge");
const displayAge= document.getElementById("displayAge");
const Age= document.getElementById("age");


var today = new Date()

console.log(today.getFullYear());


CalcAge.addEventListener('click',function(){


    let birth_date=new Date(dateOfBirth.value)

    let age=today.getFullYear() - birth_date.getFullYear()

    let month=today.getMonth() - birth_date.getMonth()

    console.log(age);

    
    
    console.log(month);


    if(month<0 || (month === 0 && today.getDate() < birth_date.getDate())){

        age = age - 1;
    }

    displayAge.style.visibility="visible";
    Age.innerText=`You are ${age} years old.`


})


