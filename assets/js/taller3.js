const ingresoNoFijo = [];

function onClickButtonPriceDiscount(){
    
    const InputMontoIngreso = document.getElementById("InputMontoIngreso");
    const MontoIngresoValue = parseInt(InputMontoIngreso.value);
    ingresoNoFijo.push(MontoIngresoValue);
    console.log(MontoIngresoValue);
    console.log(ingresoNoFijo);
  
}
function onClickCalcularMediana(){
    const salariosCol = ingresoNoFijo.map(
        function(personita){
            return personita;
        }
    );
    const salariosColSorted = salariosCol.sort(
        function (salaryA, salaryB) {
            return salaryA - salaryB;        
        }
    );
    const medianaGeneralCol = medianaSalarios(salariosColSorted);
    console.log("La mediana es"+ medianaGeneralCol);

    const promedio = calcularMediaArimetica(salariosCol);
    console.log("La media aritmetica o promedio de tus ingresos es:"+promedio);

    const moda = calcularModa(salariosColSorted);
    console.log("La moda de los ingresos no fijos es: "+moda);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "La mediana de tus datos es: " +medianaGeneralCol+
                        "\n"+
                        "La media Arimetica o promedio de tus datos es: " +promedio+
                        "\n"+
                        "La moda es: " +moda; 

}
function esPar(numerito) {
    return (numerito % 2 === 0);
}
function calcularMediaArimetica(lista){
    const sumaLista = lista.reduce( 
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaArimetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{ // devuelve cuando la lista es Impar 
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}
function calcularModa(lista1){
    const lista1Count = {}; // El objeto agrupara el array de menor a mayor los elementos.
    lista1.map( // El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += + 1;
            }else {
                lista1Count[elemento] = 1;
            }            
        }
    );
    const lista1Array = Object.entries(lista1Count).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    console.log(lista1Array);
    if(lista1Array[lista1Array.length -1][1] != 1 && lista1Array[lista1Array.length -2] != undefined){
        if(lista1Array[lista1Array.length -1][1] == lista1Array[lista1Array.length -2][1]){
            const moda = "Las modas son: "+ lista1Array[lista1Array.length -1] +" y "+ lista1Array[lista1Array.length -2];
            return moda;
        }else{
            const moda = "La moda es: "+ lista1Array[lista1Array.length -1];
            return moda;
        }
    }else if(lista1Array[lista1Array.length -1][1] != 1 ){
            const moda = "La moda es: "+ lista1Array[lista1Array.length -1];
            return moda;
    }else{
            return "no hay moda";
    }  
}
