//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100; 

    return precioConDescuento;

}

function onClickBotonPrecioDescuento(){
    const inputPrecio    = document.getElementById("InputPrecio");
    const valorPrecio    = inputPrecio.value;
    console.log("1"+valorPrecio)

    const inputDescuento = document.getElementById("InputDescuento");
    const valorDescuento = inputDescuento.value;
    console.log("2"+valorDescuento)

    const precioConDescuento = calcularPrecioConDescuento(valorPrecio, valorDescuento);

    const resultadoPrecio = document.getElementById("resultadoPrecio");

    resultadoPrecio.innerText = "El precio con descuento es: $" + precioConDescuento;
}


/*
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioDescuento,
    precioConDescuento
})
*/