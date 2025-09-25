
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

//DIV principal oculto donde viven los datos de los estudiantes
infoBox = document.createElement('div');
infoBox.classList.add('hidden-box');
pageWrapper.appendChild(infoBox);


function verifyInfo(info) {
    let err = false;
    info.forEach(item => {
        let values = Object.values(item);
        values.some(el => {
            if (el == '') {
                err = true;
            }
        })
    })
    return err;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

//backend -guardo los datos en la base de datos solamente 
let studentDB = []

registerButton.addEventListener('click', () => {

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
    displayStudent(infoBox)
    form.reset();
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




infoBtn.addEventListener('click', () => {
    if(infoBox.style.display == ''){
        infoBox.style.display = 'flex'
        infoBtn.innerHTML = 'cerrar informacion';
    }
    else if(infoBox.style.display == 'flex'){
        infoBtn.innerHTML = 'ver informacion';
        infoBox.style.display = ''
    }
})

console.log(studentDB)


