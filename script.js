// RETO 1 – Semáforo Inteligente
function verificar() {
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
      document.getElementById("resultado-semaforo").textContent = "Color no válido";
  }
}

// RETO 2 – Clasificador de Frutas
function clasificar() {
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
}

// RETO 3 – Traductor de Números
function traducir() {
  let numero = Number(document.getElementById("numero").value);

  switch (numero) {
    case 1:
      document.getElementById("resultado-numero").textContent = "Uno";
      break;
    case 2:
      document.getElementById("resultado-numero").textContent = "Dos";
      break;
    case 3:
      document.getElementById("resultado-numero").textContent = "Tres";
      break;
    default:
      document.getElementById("resultado-numero").textContent = "Número fuera de rango";
  }
}

// RETO 4 – Calificador de Exámenes
function calificar() {
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
      document.getElementById("resultado-nota").textContent = "Nota no reconocida";
  }
}

// RETO 5 – Saludo según el Idioma
function saludar() {
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
      document.getElementById("resultado-idioma").textContent = "Idioma no reconocido";
  }
}
