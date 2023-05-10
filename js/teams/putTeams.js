export const modificar = document.getElementById("modificarTeam");
modificar.addEventListener("click", (e) => {
  let id = document.getElementById("idTeam").value;
  let nombre = document.getElementById("nomTeam").value;
  let trainer = document.getElementById("trainerTeam").value;

  fetch(`http://localhost:4001/Teams/${id}`)
    .then((result) => result.json())
    .then((data) => {
      if (data.length != 0) {
        fetch(`http://localhost:4001/Teams/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            id: id,
            nombre: nombre,
            trainer: trainer,
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
