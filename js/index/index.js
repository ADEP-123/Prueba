window.onload = (event) => {
  getCampers();
  //getModulos();
};

function getCampers() {
  fetch("http://localhost:4001/Campers/")
    .then((result) => result.json())
    .then((data) => {
      mas2meses(data);
      createTeams(data);
      menorEdad(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function mas2meses(campers) {
  campers.forEach((camper) => {
    let now = new Date();
    let fechaIngreso = new Date(camper.fechIngreso);
    let diff = now.getTime() - fechaIngreso.getTime();
    let meses = Math.round(diff / 1000 / 60 / 60 / 24 / 30);
    if (meses > 2) {
      imprimirCamper(camper.id, camper.nombre);
    }
    console.log(meses);
  });
  console.log(campers);
}
function menorEdad(campers) {
  campers.forEach((camper) => {
    let now = new Date();
    let fechaNacimiento = new Date(camper.fechaNacimiento);
    let diff = now.getTime() - fechaNacimiento.getTime();
    let años = Math.round(diff / 1000 / 60 / 60 / 24 / 30 / 12);
    if (años < 18) {
      imprimirMenorEdad(camper.id, camper.nombre);
    }
  });
}
function imprimirMenorEdad(id, nombre) {
  let str = "";
  let espacio = document.getElementById("menoresEdad");
  str += `<tr>
      <td>${id}</td>
      <td>${nombre}</td>
      </tr>`;
  espacio.innerHTML = str;
}

function imprimirCamper(id, nombre) {
  let str = "";
  let espacio = document.getElementById("mas2meses");
  str += `<tr>
    <td>${id}</td>
    <td>${nombre}</td>
    </tr>`;
  espacio.innerHTML = str;
}

function createTeams(campers) {
  let campers1 = campers;
  let vTeams = [];
  campers.forEach((camper) => {
    let esta = false;
    for (i = 0; i < vTeams.length; i++) {
      if (vTeams[i] === camper.idTeamUsuario) {
        esta = true;
      }
    }
    if (esta === false) {
      vTeams.push(camper.idTeamUsuario);
    }
  });
  console.log(vTeams);
  crearTablasTeam(vTeams, campers1);
}

function crearTablasTeam(teams, campers) {
  let integrantes = "";
  let total = "";
  teams.forEach((team) => {
    let teamId = team;
    campers.forEach((camper) => {
      if (camper.idTeamUsuario === teamId) {
        integrantes += `${camper.nombre}, `;
      }
    });
    let str = "";
    str = `
      <div class="col teams">
              <table style="border: 1.5px solid white;">
                <thead>
                  <p><b>${team.nombre}</b></p>
                </thead>
                <tbody>
                  <tr>${integrantes}</tr>
                </tbody>
              </table>
            </div>`;
    total += str;
  });
  document.getElementById("teamss").innerHTML = total;
}

//function getModulos() {
//  fetch("http://localhost:4001/ModuloSkills/")
//    .then((result) => result.json())
//    .then((data) => {
//      crearVectorModulos(data);
//    })
//    .catch((err) => {
//      console.log("Error al consumir la API\n", err.message);
//    })
//    .finally(() => {
//      console.log("Se ha consumido toda el API");
//    });
//}

//function crearVectorModulos(modulos) {
//  let vModulosySkills = [];
//  modulos.forEach((modulo) => {
//    let momentaneo = [];
//    momentaneo.push(modulo.skillId);
//    momentaneo.push(modulo.id);
//    vModulosySkills.push(momentaneo);
//  });
//
//  console.log(vModulosySkills);
//  crearTablasModulos(vModulosySkills);
//}

//function crearTablasModulos(vModulosySkills) {
//  let vSkills = [];
//  vModulosySkills.forEach((moduloySkill) => {
//    let esta = false;
//    let skill = moduloySkill[0];
//    for (i = 0; i < vSkills.length; i++) {
//      if (vSkills[i] === skill) {
//        esta = true;
//      }
//    }
//    if (esta === false) {
//      vSkills.push(skill);
//    }
//  });
//
//  for (let i = 0; i < vModulosySkills.length; i++) {
//    for (let j = 0; j < vSkills.length; j++) {
//      let modules = "";
//      if(vSkills[j] === vModulosySkills[]) {
//    }
//  }
//}
