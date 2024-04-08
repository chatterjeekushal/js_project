


let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');


form.addEventListener('submit',function(e){



    e.preventDefault()

})


resetButton.addEventListener('click',function(){

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name.value = " ";
    email.value = " ";
    message.value = " ";
})


sendButton.addEventListener('click',function(){

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name=name.value
    localStorage.setItem("name",name)

    email=email.value

    localStorage.setItem("email",email)


    message=message.value

    localStorage.setItem("message",message)

})


let redata=document.getElementById("redata");

redata.addEventListener('click',function(){

    
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

name.value=localStorage.getItem("name")
email.value=localStorage.getItem("email")
message.value=localStorage.getItem("message")

})