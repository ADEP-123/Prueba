import { newNota } from "./postTest.js";
import { imprimir } from "./imprimirTest.js";
import { modificar } from "./putTest.js";
window.onload = (event) => {
  imprimir();
};
const agregar = document.getElementById("agregarEval");
agregar.addEventListener("click", (e) => {
  let idCamp = document.getElementById("idCamp").value;
  let idMod = document.getElementById("idMod").value;
  let nota = document.getElementById("nota").value;

  newNota(idCamp, idMod, nota);

  imprimir();

  document.getElementById("idCamp").value = "";
  document.getElementById("idMod").value = "";
  document.getElementById("nota").value = "";

  e.preventDefault();
});
