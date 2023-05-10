import { newCamper } from "./postCamper.js";
import { imprimir } from "./imprimir.js";
import { modificar } from "./putCamper.js";
import { eliminar } from "./deteleCamper.js";
window.onload = (event) => {
  imprimir();
};
const agregar = document.getElementById("agregarUsuario");
agregar.addEventListener("click", (e) => {
  let id = document.getElementById("idUs").value;
  let nombre = document.getElementById("nomUs").value;
  let edad = document.getElementById("edadUs").value;
  let telefono = document.getElementById("telUs").value;
  let direccion = document.getElementById("direcUs").value;
  let fechNac = document.getElementById("fechUs").value;
  let numIdUs = document.getElementById("numIdUs").value;
  let fechInUs = document.getElementById("ingUs").value;
  let idTeamUs = document.getElementById("idTeamUs").value;

  newCamper(
    id,
    nombre,
    edad,
    telefono,
    direccion,
    fechNac,
    numIdUs,
    fechInUs,
    idTeamUs
  );

  imprimir();

  document.getElementById("idUs").value = "";
  document.getElementById("nomUs").value = "";
  document.getElementById("edadUs").value = "";
  document.getElementById("telUs").value = "";
  document.getElementById("direcUs").value = "";
  document.getElementById("fechUs").value = "";
  document.getElementById("numIdUs").value = "";
  document.getElementById("ingUs").value = "";
  document.getElementById("idTeamUs").value = "";
  e.preventDefault();
});




