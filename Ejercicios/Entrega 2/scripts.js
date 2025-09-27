
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
let message = document.querySelector('.hidden-message');

//Elementos HTML 
infoBox = document.createElement('div');
infoBox.classList.add('hidden-box');
pageWrapper.appendChild(infoBox);

//preventDefault()
form.addEventListener('submit', (event) => {
    event.preventDefault();
})

//verificar si existe algun campo inconpleto en el formulario.
function errorCatcher(student) {
    let isError = Object.values(student).some(value => value == '');
    return isError;
}



//backend -guardo los datos en la base de datos solamente. (NO TOCAR, LOS DATOS SE AGREGAN CORRECTAMENTE)
let studentDB = []

let savedStudents = JSON.parse(localStorage.getItem('studentDB')) || [];
studentDB = savedStudents;
if (studentDB.length > 0) {
    displayStudent(infoBox);
}

registerButton.addEventListener('click', () => {

    //objeto estudiante
    let newStudent = {
        nombre: nameInput.value,
        apellido: surnameInput.value,
        edad: ageInput.value,
        ci: ciInput.value,
        curso: courseInput.value,
        dia: dayInput.value,
        hora: timeInput.value
    }

    if (errorCatcher(newStudent) == false) {
        studentDB.push(newStudent)
        localStorage.setItem('studentDB', JSON.stringify(studentDB));
        displayStudent(infoBox);
        showMessage('estudiante ingresado correctamente', 'green');
        form.reset();
    }
    else{
        showMessage('falta completar datos', 'red')
    }
})

//frontend
function displayStudent(parentName) {

    studentDB.forEach(el => {
        let studentBox = document.createElement('div');
        studentBox.classList.add('hidden-info');
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
            parentName.appendChild(studentBox);
    })
}

//permite mostrar un mensaje dinámico a la hora de registrar un estudiante. 
function showMessage(msg, color) {
    message.innerHTML = msg;
    message.style.color = color;
    message.style.opacity = 1;
    setTimeout(() => {
        message.style.opacity = 0;
    }, 3000)
}


//Boton que permite mostrar u ocultar información de los estudiantes.
infoBtn.addEventListener('click', () => {
    if (infoBox.style.display == '') {
        infoBox.style.display = 'flex'
        infoBtn.style.backgroundColor = 'purple'
        infoBtn.innerHTML = 'cerrar informacion';
    }
    else if (infoBox.style.display == 'flex') {
        infoBtn.innerHTML = 'ver informacion';
        infoBtn.style.backgroundColor = '#07075A';
        infoBox.style.display = ''
    }
})

console.log(studentDB)


