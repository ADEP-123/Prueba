export function newNota(idCamp, idMod, nota) {
  fetch("http://localhost:4001/Evaluaciones/", {
    method: "POST",
    body: JSON.stringify({
      idcamp: idCamp,
      idMod: idMod,
      nota: nota,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => console.log(res));
}
