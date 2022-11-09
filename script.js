const h1 =document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener("click", btnOnClick); 

function btnOnClick(){
    //la siguiente linea me concatena los 'string' que me traen los input 
    //console.log(input1.value + input2.value);

    //con el '+' antecediendo a el nombre de las variables convertimos a num cuando leemos los input
    const suma = +input1.value + +input2.value;
    pResult.innerText = "El Restultado es: "+suma;
}