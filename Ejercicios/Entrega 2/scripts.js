
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
let message = document.querySelector('.hidden-message')

//DIV principal oculto donde viven los datos de los estudiantes
infoBox = document.createElement('div');
infoBox.classList.add('hidden-box');
pageWrapper.appendChild(infoBox);


form.addEventListener('submit', (event) => {
    event.preventDefault();
})

function errorCatcher(student) {
    let isError = Object.values(student).some(value => value == '');
    return isError;
}



//backend -guardo los datos en la base de datos solamente. (NO TOCAR, LOS DATOS SE AGREGAN CORRECTAMENTE)
let studentDB = []

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
        displayStudent(infoBox);
        showMessage();
        form.reset();
    }
    else{
        throw new Error('faltan datulis')
    }
})

//frontend (NO TOCAR, ESTA BIEN)
function displayStudent(parentName) {
    let studentBox = document.createElement('div');
    studentBox.classList.add('hidden-info');
    studentDB.forEach(el => {
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


function showMessage() {
    message.innerHTML = 'estudiante agregado correctamente!';
    message.style.opacity = 1;
    setTimeout(() => {
        message.style.opacity = 0;
    }, 3000)
}


//Boton que permite mostrar u ocultar información de los estudiantes. (NO TOCAR, ESTA FUNCIONANDO)
infoBtn.addEventListener('click', () => {
    if (infoBox.style.display == '') {
        infoBox.style.display = 'flex'
        infoBtn.innerHTML = 'cerrar informacion';
    }
    else if (infoBox.style.display == 'flex') {
        infoBtn.innerHTML = 'ver informacion';
        infoBox.style.display = ''
    }
})

console.log(studentDB)


