let titulo = document.querySelector("h1");
titulo.innerHTML="Hora del Desafío";
function ConsoleAlert (){
    alert("El botón fue clicado");

}
function prom (){
    let ciudadBrasil= prompt("Dime una ciudad de Brasil");
   
    alert(`Estuve en ${ciudadBrasil} y me acordé de ti`);

}
///Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function Alert(){
    alert("Yo amo JS");
}

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function suma(){
    let numeroSuma= parseInt(prompt("Por favor me puedes dar un numero "));
    console.log(numeroSuma);
    let numSuma=parseInt(prompt("Por favor me puedes indicar otrono numero "));
    console.log(numSuma);
    total=numeroSuma+numSuma;
    alert("total:"+total);

}
