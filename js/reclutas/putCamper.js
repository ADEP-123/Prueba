export const modificar = document.getElementById("modificarUsuario");
modificar.addEventListener("click", (e) => {
  let id = document.getElementById("idUs").value;
  let nombre = document.getElementById("nomUs").value;
  let edad = document.getElementById("edadUs").value;
  let telefono = document.getElementById("telUs").value;
  let direccion = document.getElementById("direcUs").value;
  let fechNac = document.getElementById("fechUs").value;
  let numIdUs = document.getElementById("numIdUs").value;
  let fechInUs = document.getElementById("ingUs").value;
  let idTeamUs = document.getElementById("idTeamUs").value;

  fetch(`http://localhost:4001/Campers/${id}`)
    .then((result) => result.json())
    .then((data) => {
      if (data.length != 0) {
        fetch(`http://localhost:4001/Campers/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            id: id,
            nombre: nombre,
            edad: edad,
            telefono: telefono,
            direccion: direccion,
            fechaNacimiento: fechNac,
            numIdUsuario: numIdUs,
            fechIngreso: fechInUs,
            idTeamUsuario: idTeamUs,
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