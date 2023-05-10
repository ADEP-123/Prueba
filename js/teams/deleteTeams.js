import { imprimir } from "./imprimirTe.js";
export const eliminar = document.getElementById("eliminarTeam");
eliminar.addEventListener("click", (e) => {
  e.preventDefault();
  let id = document.getElementById("idTeam").value;
  fetch(`http://localhost:4001/Teams/${id}`, {
    method: "DELETE",
  }).then((res) => console.log(res));
  imprimir();
});
