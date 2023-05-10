export const modificar = document.getElementById("modificarSkill");
modificar.addEventListener("click", (e) => {
  let id = document.getElementById("idskill").value;
  let nombre = document.getElementById("nomSkill").value;

  fetch(`http://localhost:4001/Skills/${id}`)
    .then((result) => result.json())
    .then((data) => {
      if (data.length != 0) {
        fetch(`http://localhost:4001/Skills/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            id: id,
            nombre: nombre,
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
