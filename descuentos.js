//let precioOriginal = 120;
//let descuento = 18;


function calcularPrecioConDescuentos(precio, descuento) {
    let porcentajePrecioConDescuento = 100 - descuento;
    let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    let inputPrice = document.getElementById("InputPrice");
    let priceValue = inputPrice.Value;

    let inputDiscount = document.getElementById("InputDiscount");
    let discountValue = inputDiscount.Value;

    let precioConDescuento = calcularPrecioConDescuentos(priceValue, discountValue);

    let resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}