export function newSkill(id, nombre, skillId) {
  fetch("http://localhost:4001/ModuloSkills/", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      nombre: nombre,
      skillId: skillId,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => console.log(res));
}
