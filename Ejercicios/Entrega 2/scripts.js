
let pageWrapper = document.querySelector('.page-wrapper');
let registerButton = document.querySelector('.register-btn');
let infoBox = document.createElement('div')
let infoBtn = document.querySelector('.info-btn');
let form = document.querySelector('.app-form');
let nameInput = document.querySelector('#nombre');
let surnameInput = document.querySelector('#apellido');
let ageInput = document.querySelector('#edad');
let ciInput = document.querySelector('#ci');
let courseInput = document.querySelector('.curso')
let dayInput = document.querySelector('.dia');
let timeInput = document.querySelector('.hora');


form.addEventListener('submit', (event) =>{
    event.preventDefault();
})

let studentDB = []

registerButton.addEventListener('click',()=>{

   studentDB.push(
    {
        nombre: nameInput.value,
        apellido: surnameInput.value,
        edad: ageInput.value,
        ci: ciInput.value,
        curso: courseInput.value,
        dia: dayInput.value,
        hora: timeInput.value
    }
   )

})


// let infoContainer = document.createElement('div');
    // infoContainer.classList.add('hidden-box');
    // pageWrapper.appendChild(infoContainer);
    // infoContainer.appendChild(data)
    // let closeBtn = document.createElement('button')
    // closeBtn.classList.add('close-btn');
    // closeBtn.innerHTML = 'cerrar';
    // infoContainer.appendChild(closeBtn);


function displayStudent(parentName){
    let studentBox = document.createElement('div');
    
    studentBox.classList.add('hidden-info');
    
    studentDB.forEach(el =>{
        studentBox.innerHTML = 
        `
        <p>nombre: ${el.nombre}</p>
        <p>apellido: ${el.apellido}</p>
        <p>edad: ${el.edad}</p>
        <p>ci: ${el.ci}</p>
        <p>curso: ${el.curso}</p>
        <p>dia: ${el.dia}</p>
        <p>hora: ${el.hora}</p>
        `
    })

    parentName.appendChild(studentBox);
}




infoBtn.addEventListener('click', ()=>{
    if(!infoBox){
        infoBox = document.createElement('div');
        infoBox.classList.add('hidden-box');
        pageWrapper.appendChild(infoBox);
    }
    else{
        infoBox.classList.add('hidden-box');
        pageWrapper.appendChild(infoBox);
    }

    displayStudent(infoBox)
})

console.log(studentDB)


