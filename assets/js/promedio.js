const lista1 = [
    100,
    200,
    300,
    500,
];






function calcularMediaArimetica(lista){
    // let sumaLista = 0;

    // for(let i=0; i<lista1.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce( // Reduce devuelve como resultado su único valor
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}