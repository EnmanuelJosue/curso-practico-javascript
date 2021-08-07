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
    // if(Number.isNaN(discountValue)){
    //     console.log("Soy Nan");
    // }else{
    //     console.log("No soy nan");
    // }
    const InputCupon = document.getElementById("InputCupon");
    const cuponValue = InputCupon.value;
    console.log(cuponValue);
    const value = coupons.find((element) => element.name === cuponValue); // funcion find para buscar en array
    if(Number.isNaN(discountValue)&&!value){
        console.log(typeof cuponValue);
        const discountValue = 0;
        const cuponDescuento = 0;
        const precioConDescuento = calcularPrecioConDescuentro(priceValue, discountValue, cuponDescuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "No tienes ningún descuento, no se introdujo ningún dato para hacer el descuento \n el precio sigue siendo " + precioConDescuento;
        
    }
    else if(!value){ // Number.isNaN(discountValue) para saber cuando es Not a Number (NaN)  
        const cuponDescuento = 0;
        const precioConDescuento = calcularPrecioConDescuentro(priceValue, discountValue, cuponDescuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento + " Y no tienes cupon de descuento.";
    }else{
        const cuponDescuento = parseInt(value.discount);
        const precioConDescuento = calcularPrecioConDescuentro(priceValue, discountValue, cuponDescuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento + "\n El descuento de tu producto es: %" + discountValue + "\n Tu cúpon de descuento fue: %"+ cuponDescuento;   
    }
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });