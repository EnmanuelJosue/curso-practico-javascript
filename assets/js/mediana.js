function calcularMediaArimetica(lista){
    const sumaLista = lista.reduce( // Reduce devuelve como resultado su único valor
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//  const lista1 = [
//      200,
//      100,
//      600,
//      500,
//  ];
//  lista1.sort();
//  console.log(lista1);

// const mitadLista1 = parseInt(lista1.length / 2);
// function esPar(numero){
//     if (numero % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }

// }
//let mediana;
function calculoMediana(lista){
    lista.sort((a,b)=>a-b); // sort ordena los numeros 
    console.log(lista);
    let mediana;
    const mitadLista = parseInt(lista.length / 2);
    if (lista.length % 2 === 0){ // para saber si el numero es par
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2=calcularMediaArimetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
        console.log(mediana);
    }else{
        mediana = lista[mitadLista];
        console.log(mediana);
    }
}