import { newSkill } from "./postSkill.js";
import { imprimir } from "./imprimirSk.js";
import { modificar } from "./putSkill.js";
import { eliminar } from "./deleteSkill.js";
window.onload = (event) => {
  imprimir();
};
const agregar = document.getElementById("agregarSkill");
agregar.addEventListener("click", (e) => {
  let id = document.getElementById("idskill").value;
  let nombre = document.getElementById("nomSkill").value;

  newSkill(id, nombre);

  imprimir();

  document.getElementById("idskill").value = "";
  document.getElementById("nomSkill").value = "";

  e.preventDefault();
});
