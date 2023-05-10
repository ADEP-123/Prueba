import { newTeam } from "./postTeam.js";
import { imprimir } from "./imprimirTe.js";
import { modificar } from "./putTeams.js";
import { eliminar } from "./deleteTeams.js";
window.onload = (event) => {
  imprimir();
};
const agregar = document.getElementById("agregarTeam");
agregar.addEventListener("click", (e) => {
  let id = document.getElementById("idTeam").value;
  let nombre = document.getElementById("nomTeam").value;
  let trainer = document.getElementById("trainerTeam").value;

  newTeam(id, nombre, trainer);

  imprimir();

  document.getElementById("idTeam").value = "";
  document.getElementById("nomTeam").value = "";
  document.getElementById("trainerTeam").value = "";

  e.preventDefault();
});
