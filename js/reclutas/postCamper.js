export function newCamper(
    id,
    nombre,
    edad,
    telefono,
    direccion,
    fechNac,
    numIdUs,
    fechInUs,
    idTeamUs
  ) {
    fetch("http://localhost:4001/Campers/", {
      method: "POST",
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
  }