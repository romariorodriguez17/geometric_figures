// area y perimetro de cuadrado 

const periSquare = (side) => side*4 ; 
const areaSquare = (side) => side*side ; 

function calPerimetroSquare(){
    let inputSide = document.getElementById('inputSide');
    let value =Number (inputSide.value);

    const result = `el perimetro de cuadrado es : ${periSquare(value)} cm ` ; 
    document.getElementById ('result').innerText = result ;
}
// calculo de area 
function calAreaSquare(){
    let inputSide = document.getElementById('inputSide');
    let value =Number (inputSide.value);

    const result = `el area del cuadrado es : ${areaSquare(value)} cm^2` ; 
    document.getElementById ('result').innerText = result ;
}

// perimetro del triangulo y area

const periTriangle = (side1 , side2 ,base) => side1 + side2 + base ;
const areaTriangle = (base, height) => (base * height) /2  ;

// calculo del perimetro 

function calPerTriangle (){
    let side1 = document.getElementById('inputSide1');
    let side2 = document.getElementById('inputSide3');
    let side3 = document.getElementById('inputSide3');
    side1=Number(side1.value);
    side2=Number(side2.value);
    side3=Number(side3.value);
    const result = `El perimetro del triangulo es :${periTriangle(side1,side2,side3)} cm`
    document.getElementById ('result').innerText =result ; 
}

function calAreaTriangle (){
    let base = document.getElementById('inputBase');
    let height =document.getElementById('inputHeight');
    base = Number(base.value);
    height =Number(height.value);

    const result =`El área del triangulo es : ${areaTriangle(base,height)} cm^2`
    document.getElementById ('result').innerText = result
}

//  Area , perimetro y Diametro del circulo 

const diameCircle = (radio) => radio*2;
const periCircle =(radio) => diameCircle(radio)* Math.PI ;
const areaCircle = (radio) => (radio * radio) * Math.PI;


function calculateDiameCircle(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    
    const result = `El diámetro de Circulo es: ${diameCircle(radio)} cm`;
    document.getElementById ('result').innerText=result;
}
 
function calculatePerimCircle (){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    
    const result = `El perímetro de Circulo es: ${periCircle(radio)} cm`;
    document.getElementById ('result').innerText=result;
}
 
function calculateAreaCircle(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    
    const result = `El área de Circulo es: ${areaCircle(radio)} cm^2`;
    document.getElementById ('result').innerText=result;
}
