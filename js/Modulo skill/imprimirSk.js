export function imprimir() {
  let str = "";
  fetch("http://localhost:4001/ModuloSkills/")
    .then((result) => result.json())
    .then((data) => {
      data.forEach((skill) => {
        str += `
    <tr>
      <td>${skill.id}</td>
      <td>${skill.nombre}</td>
      <td>${skill.skillId}</td>   
    </tr>`;
      });
      document.getElementById("modulosimpr").innerHTML = str;
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}
