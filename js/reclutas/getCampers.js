export function getCampers() {
  let campers;
  fetch("http://localhost:4001/Campers/")
    .then((result) => result.json())
    .then((data) => {
      campers = data;
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
  return campers;
}
