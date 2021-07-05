//Calculamos el perimetro de un cuadrado


function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();



function areaCuadrado(lado){
    return lado * lado
}



function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}



function areaTriangulo(base, altura){
    return (base *  altura) / 2;
}



//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencua
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areatroCirculo(radio){
    return (radio * radio) * PI;
}



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