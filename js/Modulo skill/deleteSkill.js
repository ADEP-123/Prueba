import { imprimir } from "./imprimirSk.js";
export const eliminar = document.getElementById("eliminarModSkill");
eliminar.addEventListener("click", (e) => {
  e.preventDefault();
  let id = document.getElementById("idMod").value;
  fetch(`http://localhost:4001/ModuloSkills/${id}`, {
    method: "DELETE",
  }).then((res) => console.log(res));
  imprimir();
});
