// const precioOriginal= 120;
// const descuento = 18;

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
    const cuponValue = parseInt(InputCupon.value);
    console.log(typeof cuponValue);

    const precioConDescuento = calcularPrecioConDescuentro(priceValue, discountValue, cuponValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });