//RETO 1 – Semáforo Inteligente
document.getElementById("btn-semaforo").onclick = () => {
  let color = document.getElementById("color").value;

  switch (color) {
    case "Rojo":
      document.getElementById("resultado-semaforo").textContent = "¡Para!";
      break;
    case "Verde":
      document.getElementById("resultado-semaforo").textContent = "¡Pasa!";
      break;
    case "Amarillo":
      document.getElementById("resultado-semaforo").textContent = "¡Cuidado!";
      break;
    default:
      document.getElementById("resultado-semaforo").textContent = "Elige un color";
  }
};


//RETO 2 – Clasificador de Frutas
document.getElementById("btn-fruta").onclick = () => {
  let fruta = document.getElementById("fruta").value;

  switch (fruta) {
    case "Manzana":
      document.getElementById("resultado-fruta").textContent = "Es roja y dulce";
      break;
    case "Banana":
      document.getElementById("resultado-fruta").textContent = "Es amarilla y larga";
      break;
    case "Pera":
      document.getElementById("resultado-fruta").textContent = "Es verde y jugosa";
      break;
    default:
      document.getElementById("resultado-fruta").textContent = "Fruta no reconocida";
  }
};


// RETO 3 – Traductor de Números
document.getElementById("btn-numero").onclick = () => {
  let numero = document.getElementById("numero").value;

  switch (numero) {
    case "1":
      document.getElementById("resultado-numero").textContent = "Uno";
      break;
    case "2":
      document.getElementById("resultado-numero").textContent = "Dos";
      break;
    case "3":
      document.getElementById("resultado-numero").textContent = "Tres";
      break;
    default:
      document.getElementById("resultado-numero").textContent = "Elige un número";
  }
};


//RETO 4 – Calificador de Exámenes
document.getElementById("btn-nota").onclick = () => {
  let nota = document.getElementById("nota").value;

  switch (nota) {
    case "A":
      document.getElementById("resultado-nota").textContent = "Excelente";
      break;
    case "B":
      document.getElementById("resultado-nota").textContent = "Buen trabajo";
      break;
    case "C":
      document.getElementById("resultado-nota").textContent = "Puedes mejorar";
      break;
    default:
      document.getElementById("resultado-nota").textContent = "Elige una nota";
  }
};


//RETO 5 – Saludo según el Idioma
document.getElementById("btn-idioma").onclick = () => {
  let idioma = document.getElementById("idioma").value;

  switch (idioma) {
    case "Español":
      document.getElementById("resultado-idioma").textContent = "¡Hola!";
      break;
    case "Inglés":
      document.getElementById("resultado-idioma").textContent = "Hello!";
      break;
    case "Francés":
      document.getElementById("resultado-idioma").textContent = "Salut!";
      break;
    default:
      document.getElementById("resultado-idioma").textContent = "Elige un idioma";
  }
};