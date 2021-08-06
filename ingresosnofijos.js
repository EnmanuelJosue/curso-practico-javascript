const ingresoNoFijo = [];

function onClickButtonPriceDiscount(){
    const InputTipoIngreso = document.getElementById("InputTipoIngreso");
    const TipoIngresoValue = InputTipoIngreso.value;

    const InputMontoIngreso = document.getElementById("InputMontoIngreso");
    const MontoIngresoValue = parseInt(InputMontoIngreso.value);
    ingresoNoFijo.push({
        tipo: TipoIngresoValue,
        monto: MontoIngresoValue,
    },)
    console.log(TipoIngresoValue);
    console.log(MontoIngresoValue);
    console.log(ingresoNoFijo);
}
function onClickCalcularMediana(){
    const salariosCol = ingresoNoFijo.map(
        function(personita){
            return personita.monto;
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
    console.log("La media aritmetica o promedio de tus ingresos es:"+promedio )
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

