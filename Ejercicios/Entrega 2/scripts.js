
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

//La idea de crear varios elementos html es meramente la de practicar.. Siempre es mejor delegar cada acción al lenguaje correspondiente.

//Elementos HTML 
infoBox = document.createElement('div');
infoBox.classList.add('hidden-box');
pageWrapper.appendChild(infoBox);

let searchContainer = document.createElement('div');
searchContainer.style.display = 'flex'
searchContainer.style.width = '100%';
searchContainer.style.padding = '.2rem';
searchContainer.style.border = '1px solid black';
searchContainer.style.alignItems = 'center';

let searchInput = document.createElement('input');
 
searchInput.style.border = 'none';
searchInput.style.backgroundColor = 'rgba(255,255,255,.6)';

let searchTerm = document.createElement('select');
// Default
let optionDefault = document.createElement('option');
optionDefault.value = '---------';
optionDefault.textContent = '----------';

// Opción 1
let option1 = document.createElement('option');
option1.value = 'nombre';
option1.textContent = 'Nombre';

// Opción 2
let option2 = document.createElement('option');
option2.value = 'apellido';
option2.textContent = 'Apellido';

// Opción 3
let option3 = document.createElement('option');
option3.value = 'curso';
option3.textContent = 'Curso';

searchTerm.appendChild(optionDefault);
searchTerm.appendChild(option1);
searchTerm.appendChild(option2);
searchTerm.appendChild(option3);
searchTerm.style.backgroundCOlor = 'transparent';

let searchButton = document.createElement('img');
searchButton.setAttribute('src', 'images/icon.png');
searchButton.style.width = '1.5rem';
searchButton.style.height = '1.5rem'
searchButton.style.cursor= "pointer";

searchInput.setAttribute('placeholder', 'buscar estudiante');
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchTerm)
searchContainer.appendChild(searchButton)
infoBox.appendChild(searchContainer);





form.addEventListener('submit', (event) => {
    event.preventDefault();
})

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


function showMessage(msg, color) {
    message.innerHTML = msg;
    message.style.color = color;
    message.style.opacity = 1;
    setTimeout(() => {
        message.style.opacity = 0;
    }, 3000)
}


//Boton que permite mostrar u ocultar información de los estudiantes. (NO TOCAR, ESTA FUNCIONANDO)
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


