function saludo() {
    var nombre = prompt("Ingrese su nombre:");
  
    if (nombre === null || nombre === "") {
      alert("Por favor, ingrese su nombre.");
    } else {
      alert("¡Bienvenido, " + nombre + "!");
    }
  }
  