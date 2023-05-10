export function imprimir() {
  let str = "";
  fetch("http://localhost:4001/Evaluaciones/")
    .then((result) => result.json())
    .then((data) => {
      data.forEach((test) => {
        str += `
    <tr>
      <td>${test.idCamp}</td>
      <td>${test.idMod}</td>
      <td>${test.nota}</td>   
    </tr>`;
      });
      document.getElementById("evalImpr").innerHTML = str;
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}
