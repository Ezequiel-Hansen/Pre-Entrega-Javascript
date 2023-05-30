//clase 1
// Un debug que nos calcule la edad en base a los datos que le pasamos por las variables
// let nacimiento= prompt("ingrese su año de nacimiento: ");
// const ANIO_ACTUAL= 2023;
// let calcularEdad= ANIO_ACTUAL-nacimiento;
// let mayoEdad;
//  if (calcularEdad<18){
//     mayoEdad=false;
//  }
//  else{
//     mayoEdad=true;
//  }
// console.log(mayoEdad);


// if(mayoEdad){
//     alert("podes pasar");
// }
// else{
//     alert("no tenes la edad suficiente")
// }

// console.log(typeof(mayoEdad));

//clase 2
// const USUARIO= "ezequiel";
// const CLAVE="1234";

// let usuario = prompt("Ingrese su nombre de usuario");
// let clave=prompt("Ingresa tu clave");

// if(usuario === USUARIO && clave === CLAVE){
//     alert("has iniciado sesion "+usuario)
// }
// else{
//     alert("Usuario y/o contraseña incorrecta")
// }

//clase 3

// let tabla= parseInt(prompt("Que tabla queres saber"));

// for(let i=1;i<10;i++){
//     let resultado=tabla*1
//     alert(tabla +"x"+i+"es igual a "+resultado);
// }
//  let cupos=3;
//  for(let i=1;i<10;i++){
//     let nombrePaciente= prompt("Ingrese su nombre");
//     if (cupos==0){
//         alert(nombrePaciente+"no tenemos mas turnos disponibles")
//         break;
//     }
//     alert(nombrePaciente+"su n de turno es "+i);
//     cupos--;
//  }
let comando;
while(comando!=3){
    comando=Number(prompt("Ingrese el numero de opcion:\n 1-Calificacion alfabetica a numerica\n 2-Tablas de multiplicar\n 3-Salir\n"));
    if(comando===1){
        let notasAlfabeticas=prompt("Ingrese una nota alfabetica");
        let notaNumerica;
        switch(notasAlfabeticas){
            case ("F"):
                notaNumerica=6;
                alert(`la nota numerica es ${notaNumerica}`);
                break;
            case ("D"):
                notaNumerica=7;
                alert(`la nota numerica es ${notaNumerica}`);
                break;
            case ("C"):
                notaNumerica=8;
                alert(`la nota numerica es ${notaNumerica}`);
                break;
            case ("B"):
                notaNumerica=9;
                alert(`la nota numerica es ${notaNumerica}`);
                break;
            case ("A"):
                notaNumerica=10;
                alert(`la nota numerica es ${notaNumerica}`); 
                break;
            default:
                alert("Error, Calificacion inexistente");     
        }

    }
    else if(comando===2){
        let tablas=Number(prompt("Ingrese el numero del cual quiere saber la tabla de multiplicar:"));
        for(let i=1;i<11;i++){
            resultado=tablas*i
            alert(`Tabla  del ${tablas}\n ${tablas} * ${i}= ${resultado}`);
        }
    }
}
alert("Hasta pronto");


function sumar(valor1,valor2){
    
    let resultado=valor1+valor2
    return resultado;
}
function resta(valor1,valor2){
    let resultado=valor1-valor2
    return resultado;
}
function multiplica(valor1,valor2){
    let resultado=valor1*valor2
    return resultado;
}
function sumar(valor1,valor2){
    let resultado=valor1+valor2
    return resultado;
}

function calculadora(){
    let valor1;
    let valor2;
    let rta=prompt("Ingrese lo que desea calcular");
    switch(rta){
        case"+":
            valor1=prompt("Ingrese el valor1");
            valor2=prompt("Ingrese el valor2");
            sumar(valor1,valor2)
            break;
        case"-":
            valor1=prompt("Ingrese el valor1");
            valor2=prompt("Ingrese el valor1");
            resta(valor1,valor2);
            break;
        case"-":
            valor1=prompt("Ingrese el valor1");
            valor2=prompt("Ingrese el valor1");
            multiplica(valor1,valor2);
            break;        
    }
}
