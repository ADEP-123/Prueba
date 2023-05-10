export function newSkill(id, nombre) {
  fetch("http://localhost:4001/Skills/", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      nombre: nombre,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => console.log(res));
}
