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
