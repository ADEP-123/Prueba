export function newTeam(id, nombre, trainer) {
  fetch("http://localhost:4001/Teams/", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      nombre: nombre,
      trainer: trainer,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => console.log(res));
}
