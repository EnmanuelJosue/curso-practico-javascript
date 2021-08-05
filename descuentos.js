// const precioOriginal= 120;
// const descuento = 18;
const coupons = [
    {
        name: "superDescuento",
        discount: 15
    },
    {
        name: "megaDescuento",
        discount: 30
    },
    {
        name: "hyperDescuento",
        discount: 50
    },
]


function calcularPrecioConDescuentro(precio, descuento, cupon){
    const descuentototal = descuento + cupon;
    const porcentajePrecioConDescuento = 100 - descuentototal;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100; 
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = parseInt(inputPrice.value);
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = parseInt(inputDiscount.value);

    const InputCupon = document.getElementById("InputCupon");
    const cuponValue = InputCupon.value;
    const value = coupons.find((element) => element.name === cuponValue); // funcion find para buscar en array
    if(!value){
        alert("El cupon de descuento no es valido" + cuponValue);
    }
    else{
        console.log(typeof cuponValue);
        const cuponDescuento = parseInt(value.discount);
        const precioConDescuento = calcularPrecioConDescuentro(priceValue, discountValue, cuponDescuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });