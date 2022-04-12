// codigo del cuadrado
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrada(lado) {
   return lado * lado;
}
console.groupEnd();

// codigo del triangulo
console.group("triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
return (base * altura) / 2;
}

console.groupEnd();

// codigo del circulo
console.group("circulo");

function diametroCirculo(radio) {
    return radio * 2;
}

// PI
let PI = Math.PI;
console.log("PI es : " + PI);

// circunferencia
function perimetroCirculo(radio) {
    let diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
return (radio * radio) * PI;
}

console.groupEnd();

// aqui interactuamos con el HTML
//funciones para el cuadrado 
function CalcularPerimetroCuadrado(){
    let input = document.getElementById("inputCuadrado");
    let value = input.value;

    let perimetro = perimetroCuadrado(value);
    alert(perimetro)
}
function CalcularAreaCuadrado(){
    let input = document.getElementById("inputCuadrado");
    let value = input.value;

    let area = areaCuadrada(value);
    alert(area)
}

// funciones para el triangulo
function calcularPerimetroTriangulo(){
    let inputLado1 = document.getElementById("ladoTriangulo1");
    let lado1 = inputLado1.value;
    lado1 = parseInt(lado1);

    let inputLado2 = document.getElementById("ladoTriangulo2");
    let lado2 = inputLado2.value;
    lado2 = parseInt(lado2);

    let inputBase = document.getElementById("baseTriangulo");
    let base = inputBase.value;
    base = parseInt(base);

    let perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}
function CalcularAreaTriangulo(){
    let inputBase = document.getElementById("baseTriangulo");
    let base = inputBase.value;

    let inputAltura = document.getElementById("AlturaTriangulo");
    let altura = inputAltura.value;

    let area = areaTriangulo(base, altura);
    alert(area);
}

// funciones para el circulo
function CalcularDiametroCirculo(){
    let inputRadio = document.getElementById("radioCirculo");
    let radio = inputRadio.value;

    let diametro = diametroCirculo(radio);
    alert(diametro);
}
function CalcularPerimetroCirculo(){
    let inputRadio = document.getElementById("radioCirculo")
    let radio = inputRadio.value;

    let perimetro = perimetroCirculo(radio);
    alert(perimetro);
}
function CalcularAreaCirculo(){
    let inputRadio = document.getElementById("radioCirculo")
    let radio = inputRadio.value;
    let area = areaCirculo(radio);
    alert(area);
}