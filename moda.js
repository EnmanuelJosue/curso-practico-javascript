// const lista1 = [
//     1,
//     2,
//     2,
//     1,
//     1,
//     2,
//     4,
//     2,
//     2,
//     1,
//     1,
// ];

// const lista1Count = {};


// const lista1Array = Object.entries(lista1Count).sort(
//     function(elementoA, elementoB){
//         return elementoA[1] - elementoB[1];
//     }
// );
//const moda = lista1Array[lista1Array.length -1];

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
    if(lista1Array[lista1Array.length -1][1]==lista1Array[lista1Array.length -2][1]){
        let moda = "Las modas son: "+ lista1Array[lista1Array.length -1] +" y "+ lista1Array[lista1Array.length -2];
        return moda;
        console.log("soniguales");
    }else{
        const moda = lista1Array[lista1Array.length -1];
        return moda;
    }
    
}