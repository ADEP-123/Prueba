export const modificar = document.getElementById("modificarEval");
modificar.addEventListener("click", (e) => {
  let idcamp = document.getElementById("idCamp").value;
  let idMod = document.getElementById("idMod").value;
  let nota = document.getElementById("nota").value;

  fetch(`http://localhost:4001/Evaluaciones/${id}`)
    .then((result) => result.json())
    .then((data) => {
      if (data.length != 0) {
        fetch(`http://localhost:4001/Evaluaciones/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            idcamp: idcamp,
            idMod: idMod,
            nota: nota,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }).then((res) => console.log(res));
      } else {
        alert("No existe un camper con este ID");
      }
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
  e.preventDefault();
});
