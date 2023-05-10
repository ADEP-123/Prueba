export function imprimir() {
  let str = "";
  fetch("http://localhost:4001/Teams/")
    .then((result) => result.json())
    .then((data) => {
      data.forEach((camper) => {
        str += `
    <tr>
      <td>${camper.id}</td>
      <td>${camper.nombre}</td>
      <td>${camper.trainer}</td>   
    </tr>`;
      });
      document.getElementById("teamsimpr").innerHTML = str;
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}
