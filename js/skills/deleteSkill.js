import { imprimir } from "./imprimirSk.js";
export const eliminar = document.getElementById("eliminarSkill");
eliminar.addEventListener("click", (e) => {
  e.preventDefault();
  let id = document.getElementById("idskill").value;
  fetch(`http://localhost:4001/Skills/${id}`, {
    method: "DELETE",
  }).then((res) => console.log(res));
  imprimir();
});
