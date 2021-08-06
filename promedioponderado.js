const PP = [
    {
        curso: "Matematica 1",
        credito: 5,
        nota: 15
    },
    {
        curso: "Fisica 1",
        credito: 5,
        nota: 16
    },
    {
        curso: "Biologia 1",
        credito: 4,
        nota: 11
    },
    {
        curso: "Quimica 1",
        credito: 4,
        nota: 10
    },
    {
        curso: "Lenguaje",
        credito: 2,
        nota: 05
    },
];

function promedioPonderado (PP){
    const notaPorCredito = PP.map(function (noteObject) { // El siguiente código toma un array de objetos y crea un nuevo array que contiene los nuevos objetos formateados.
        return noteObject.nota * noteObject.credito;
    });
    const sumaNotaPorCredito = notaPorCredito.reduce( // Reduce devuelve como resultado su único valor
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const Credito = PP.map(function (noteObject) { // El siguiente código toma un array de objetos y crea un nuevo array que contiene los nuevos objetos formateados.
        return noteObject.credito;
    });
    const sumaCredito = Credito.reduce( // Reduce devuelve como resultado su único valor
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );    
    const promedioPonderado = sumaNotaPorCredito / sumaCredito;
    alert(promedioPonderado);
}promedioPonderado(PP);

// const notaPorCredito = PP.map(function (noteObject) { // El siguiente código toma un array de objetos y crea un nuevo array que contiene los nuevos objetos formateados.
//     return noteObject.nota * noteObject.credito;
// });
// const sumaNotaPorCredito = notaPorCredito.reduce( // Reduce devuelve como resultado su único valor
//     function(valorAcumulado = 0, nuevoElemento){
//         return valorAcumulado + nuevoElemento;
//     }
// );
// const Credito = PP.map(function (noteObject) { // El siguiente código toma un array de objetos y crea un nuevo array que contiene los nuevos objetos formateados.
//     return noteObject.credito;
// });
// const sumaCredito = Credito.reduce( // Reduce devuelve como resultado su único valor
//     function(valorAcumulado = 0, nuevoElemento){
//         return valorAcumulado + nuevoElemento;
//     }
// );

// const promedioPonderado = sumaNotaPorCredito / sumaCredito;

