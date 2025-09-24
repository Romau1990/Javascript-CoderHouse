//CRUD DE UN COLEGIO
//Estudiantes de una clase
//La mejor opcion sería crear una clase para poder manejar todo esto creando métodos propios. Pero dado a que aún no hemos llegado a esa parte me limitaré a lo que hemos dado. 



//Base de datos que almacena un array con info de cada estudiante. Sería mejor almacenar objetos pero dado a que aún no hemos iniciado con dicho tema crearé un array por persona para almacenar sus datos de forma independiente a través del método push(). 

function studentDB(...func){
    let studentList = []
    studentList.push(...func)
    return studentList;
}

//
function studentInfo(student, subject, score){
    // let studentName = prompt('nombre del estudiante'); Podria capturar los datos a través de prompt retornar sus variables en studentDB() pero me pareció más interesante así para mostrar algo más abajo. 
    // let studentSubject = prompt('materia que cursa');
    return studentDB(student, subject,score)
}


//La razón para usar parametros y no prompt es para demostrar como una funcion de primer orden. Es decír, funcion que recibe como argumento otra en el caso de arriba es capaz que funciona de forma similar a una funcion constructora. Creando 'instancias' por así decír de cada clase.. en este caso la 'clase' studentInfo(), y luego ser ejecutada en studentDB pasando las variables como argumentos, los cuales pueden ser varios gracias a que studentDB() maneja un parametro ...rest
let student1 =studentInfo('Rodrigo','Math', 6);
let student2 =studentInfo('Martina', 'Biology', 7);
let student3 =studentInfo('Christian', 'English', 5); 
let student4 = studentInfo('Sofia', 'Math', 8);
let student5 = studentInfo('Lucas', 'History', 10);
let student6 = studentInfo('Valentina', 'English', 4);
let student7 = studentInfo('Mateo', 'Biology', 2);
let student8 = studentInfo('Camila', 'Physics', 3);
let student9 = studentInfo('Benjamin', 'Math', 8);
let student10 = studentInfo('Isabella', 'History', 6);
let student11 = studentInfo('Sebastian', 'English', 9);
let student12 = studentInfo('Emilia', 'Physics', 7);
let student13 = studentInfo('Nicolas', 'Biology', 6);

//studentDB() se ejecutaría una sola vez y se colocarían toda las instancias como argumentos. Si studentDB se ejecuta una segunda vez sin argumentos estos ya no existiran más en la base de datos a no ser que se pasen las instancias nuevamente como argumentos. 
console.log(studentDB(student1, student2, student3,student4,student5,student6,student7,student8,student9,student10,student11,student12,student13));




//Forma 2 y más segura (CLOSURE)


//retornamos una funcion para causar que el contenido de studentList quede congelado. Esto se debe a que no necesitamos invocar más de una vez la funcion padre y solo nos encargamos de ejecutar la funcion de adentro una vez se guarda en una variable. 

function schoolDB(){
    const studentList = [];
    return function(student, subject, score){

        if(student !== undefined){
            studentList.push([student, subject, score]);
        }
        return studentList;
    }
}

//calcula el promedio de todos los estudiantes en base a sus notas. 
function calcAverage(){
    let avg = student().flat().reduce((a, b)=>{ 
        return typeof b == 'number' ? Math.round(a += b /student().length)  : a ;
    },0)
    return avg;
}

//busca y filta todos los estudiantes que estudian [subject].
function studentsBySubject(subject){
    let found = student().filter(st => st.includes(subject));
    return found;
}

//agrega una etiqueta de [aprobado] si la persona tiene un score de más de 5.
function addPassTag(){
    let tagged = student().map(st =>{
        if(st[2] > 5){
            return [st[0]+' '+st[1]+'[aprobado]'+' '+st[2]];
        }
        else{
            return st;
        }
    })
    return tagged;
}
//pasa un numero como parametro y filtra los [n] estudiantes que mejor desempeño estan teniendo en sus respectivas materias.  
let bestStudents = function(n){
    let newArr = [];
    let list = student().sort((a, b)=> b[2] - a[2]);
    for(let i = 0; i < n; i++){
        newArr.push(list[i]);
    }
    return newArr;
}

//Simplemente accede a la lista completa de estudiantes. 
let showStudentList = function(){
    return student();
}

//quitar un estudiante de la lista
let removeStudent = function(){
    
}

const student = schoolDB();
console.log(student('Rodrigo','Math', 5));
console.log(student('Mariana', 'Biology', 7));
console.log(student('Jose', 'English', 3));
console.log(student('Sofia', 'Math', 8));
console.log(student('Lucas', 'History', 5));
console.log(student('Valentina', 'English', 10));
console.log(student('Mateo', 'Biology', 5));
console.log(student('Camila', 'Physics', 6));
console.log(student('Benjamin', 'Math', 10));
console.log(student('Isabella', 'History', 4));
console.log(student('Sebastian', 'English', 2));
console.log(student('Emilia', 'Physics', 6));
console.log(student('Nicolas', 'Biology', 7));
console.log(calcAverage());
console.log(studentsBySubject('Math'))
console.log(addPassTag());
console.log(bestStudents(1))