let base = document.getElementById("base");
let rotulo = document.getElementById("rotulo");

let altura = document.getElementById("altura");
let rotulo1 = document.getElementById("rotulo1");

rotulo.innerHTML = "ingrese el valor de Base:";
rotulo1.innerHTML = "ingrese el valor de Altura:";

let btnEnv1 = document.getElementById("btnEnviar1");
btnEnv1.addEventListener("click", () => {
  console.log("el area del rectangulo", base.value * altura.value);
});
