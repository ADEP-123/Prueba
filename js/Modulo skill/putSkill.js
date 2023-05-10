export const modificar = document.getElementById("modificarModSkill");
modificar.addEventListener("click", (e) => {
  let id = document.getElementById("idMod").value;
  let nombre = document.getElementById("nomModSkill").value;
  let skillId = document.getElementById("idSkill").value;

  fetch(`http://localhost:4001/ModuloSkills/${id}`)
    .then((result) => result.json())
    .then((data) => {
      if (data.length != 0) {
        fetch(`http://localhost:4001/ModuloSkills/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            id: id,
            nombre: nombre,
            skillId: skillId,
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
