function mostrarNombre() {

    let nombre = document.getElementById("nombre").value;

    document.getElementById("resultado").textContent =
        "Hola " + nombre + ", bienvenido a Kawasaki.";

}






function mostrarRegistro() {
  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let asunto = document.getElementById("asunto").value.trim();
  let numero = document.getElementById("numero").value.trim();

  let textoRegistro = document.getElementById("registro");

  if (nombre === "" || email === "" || asunto === "" || mensaje === "" || numero == "") {
    textoRegistro.textContent = "Por favor, completa todos los campos.";
    textoRegistro.style.color = "red"; 
  } else if (isNaN(numero)) {
    textoRegistro.textContent = "El número de contacto solo puede contener números.";
    textoRegistro.style.color = "red";
  } else if (numero.length !== 10) {
    textoRegistro.textContent = "El número debe tener exactamente 10 dígitos.";
    textoRegistro.style.color = "red";
  }else{
    
    textoRegistro.textContent = "Datos registrados exitosamente";
    textoRegistro.style.color = "#c7ff9c"; 
  }
}

