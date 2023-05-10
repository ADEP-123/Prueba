import { newSkill } from "./postSkill.js";
import { imprimir } from "./imprimirSk.js";
import { modificar } from "./putSkill.js";
import { eliminar } from "./deleteSkill.js";
window.onload = (event) => {
  imprimir();
};
const agregar = document.getElementById("agregarModSkill");
agregar.addEventListener("click", (e) => {
  let id = document.getElementById("idMod").value;
  let nombre = document.getElementById("nomModSkill").value;
  let skillId = document.getElementById("idSkill").value;

  newSkill(id, nombre, skillId);

  imprimir();

  document.getElementById("idMod").value = "";
  document.getElementById("nomModSkill").value = "";
  document.getElementById("idSkill").value = "";

  e.preventDefault();
});
