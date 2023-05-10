import { imprimir } from "./imprimir.js";
export const eliminar = document.getElementById("eliminarUsuario");
eliminar.addEventListener("click", (e) => {
  e.preventDefault();
  let id = document.getElementById("idUs").value;
  fetch(`http://localhost:4001/Campers/${id}`, {
    method: "DELETE",
  }).then((res) => console.log(res));
  imprimir();
});