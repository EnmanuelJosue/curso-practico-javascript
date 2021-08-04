// Código del cuadrado
console.group("Cuadrados");
    //const ladoCuadrado = 5;
    //console.log("Los lados del cuadrado miden:"+ ladoCuadrado + "cm");

function perimetroCuadrado(lado){ 
    return lado*4;
}
perimetroCuadrado();
//console.log("El perimetro del cuadrado es:"+ perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}

//console.log("El area del cuadrado es:"+ areaCuadrado + "cm^2");
console.groupEnd();

// Código del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden:"
// + ladoTriangulo1 + " cm, " 
// + ladoTriangulo2 + " cm, " 
// + baseTriangulo + " cm"
// );
// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: "+ alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: "+ perimetroTriangulo + " cm");

function areaTriangulo(base, altura){
    return (base*altura)/2;
}
console.log("El area del triangulo es: "+ areaTriangulo + " cm^2");

console.groupEnd();

// Codigo del circulo
console.group("Circulos");
// radio
//const radioCirculo = 4;
// diametro
function diametroCirculo(radio){
    return radio * 2;
}
// pi
const PI= Math.PI;
// circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// area
function areaCirculo(radio){
    return PI*(radio*radio);
}

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = parseInt(input.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = parseInt(input3.value);
    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = parseInt(input3.value);
    const input4 = document.getElementById("InputTriangulo4");
    const value4 = parseInt(input4.value);

    const area = areaTriangulo(value3, value4);
    alert(area);
}


