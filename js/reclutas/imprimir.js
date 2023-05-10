export function imprimir() {
    let str = "";
    fetch("http://localhost:4001/Campers/")
      .then((result) => result.json())
      .then((data) => {
        data.forEach((camper) => {
          str += `
    <tr>
      <td>${camper.id}</td>
      <td>${camper.nombre}</td>
      <td>${camper.edad}</td>
      <td>${camper.telefono}</td>
      <td>${camper.direccion}</td>
      <td>${camper.fechaNacimiento}</td>
      <td>${camper.numIdUsuario}</td>
      <td>${camper.fechIngreso}</td>
      <td>${camper.idTeamUsuario}</td>    
    </tr>`;
        });
        document.getElementById("reclutasimpr").innerHTML = str;
      })
      .catch((err) => {
        console.log("Error al consumir la API\n", err.message);
      })
      .finally(() => {
        console.log("Se ha consumido toda el API");
      });
  }