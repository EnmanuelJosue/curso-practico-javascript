
// perimetro del cuadrado
function perimetroCuadrado(lado){ 
    return lado*4;
}
// area cuadrado
function areaCuadrado(lado){
    return lado * lado;
}


function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

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
    const resultP = document.getElementById("container__form-result-cuadrado");
    resultP.innerText = "El perimetro del cuadrado es: " + perimetro;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    const resultP = document.getElementById("container__form-result-cuadrado");
    resultP.innerText = "El area del cuadrado es: " + area;
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = parseInt(input.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = parseInt(input3.value);
    const perimetro = perimetroTriangulo(value, value2, value3);
    const resultP = document.getElementById("container__form-result-triangulo");
    resultP.innerText = "El perimetro del triangulo es: " + perimetro;
    
}
function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = parseInt(input3.value);
    const input4 = document.getElementById("InputTriangulo4");
    const value4 = parseInt(input4.value);

    const area = areaTriangulo(value3, value4);
    const resultP = document.getElementById("container__form-result-triangulo");
    resultP.innerText = "El area del triangulo es: " + area;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = parseInt(input.value);
    const perimetro = perimetroCirculo(value);
    const resultP = document.getElementById("container__form-result-circle");
    resultP.innerText = "El perimetro del circulo es: " + parseFloat(perimetro).toFixed(2);;
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = parseInt(input.value);
    const area = areaCirculo(value);
    const resultP = document.getElementById("container__form-result-circle");
    resultP.innerText = "El area del circulo es: " + parseFloat(area).toFixed(2);
}

//Calcula la altura de un triangulo Isósceles.
function alturaTrianguloIscoceles(lado1, lado2, base){
        return Math.sqrt((lado1*lado2)-((base*base)/4));
}

function calcularAlturaIscoceles(){
    const input = document.getElementById("InputTrianguloIscoceles");
    const value = parseInt(input.value);
    const input2 = document.getElementById("InputTrianguloIscoceles2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("InputTrianguloIscoceles3");
    const value3 = parseInt(input3.value);
    if(value==value2 && value!=value3 && value2!=value3){
        const altura = alturaTrianguloIscoceles(value, value2, value3);
        const resultP = document.getElementById("container__form-result-isosceles");
        resultP.innerText = "La altura del triangulo es: " + parseFloat(altura).toFixed(2);
    }else{
        const resultP = document.getElementById("container__form-result-isosceles");
        resultP.innerText = "Los lados A y B no son iguales, no es un triangulo Iscoceles"        
    }

}



// function areaCirculo(radio){
//     return PI*(radio*radio);
// }