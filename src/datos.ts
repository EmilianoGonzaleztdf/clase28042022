let btnEnv1 = document.getElementById("btnEnviar1");
let base = document.getElementById("base");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "ingrese el valor de Base:";
let btnEnv2 = document.getElementById("btnEnviar2");
let altura = document.getElementById("altura");
let rotulo1 = document.getElementById("rotulo1");
rotulo1.innerHTML = "ingrese el valor de Altura:";

btnEnv1.addEventListener("click", () => {
  console.log("el area del rectangulo", base.value * altura.value);
