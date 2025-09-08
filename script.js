let personas = [
  { nombre: "Ana", edad: 25, profesion: "Ingeniera" },
  { nombre: "Luis", edad: 30, profesion: "Doctor" },
  { nombre: "María", edad: 28, profesion: "Diseñadora" },
  { nombre: "Pedro", edad: 35, profesion: "Profesor" },
  { nombre: "Carla", edad: 22, profesion: "Estudiante" }
];

function mostrarPersonas() {
  let salida = "";
  personas.forEach(p => {
    salida += `Nombre: ${p.nombre}, Edad: ${p.edad}, Profesión: ${p.profesion}<br>`;
  });
  document.getElementById("personas").innerHTML = salida;
}
