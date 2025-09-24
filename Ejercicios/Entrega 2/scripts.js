

let registerButton = document.querySelector('.register-btn');
let form = document.querySelector('.app-form')
let nameInput = document.querySelector('.nombre')
let surnameInput = document.querySelector('.apellido')
let ageInput = document.querySelector('.edad')
let ciInput = document.querySelector('.ci')


form.addEventListener('submit', (event) =>{
    event.preventDefault();
})


registerButton.addEventListener('click',()=>{
   //cuando hago click me crea un elemento
   let infoContainer = document.createElement('div');
   //doy formato preexistente de mi CSS
   infoContainer.classList.add('hidden-box');
   //muestro en pantalla el elemento
   body.appendChild(infoContainer);
})