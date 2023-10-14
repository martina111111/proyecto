// Evitar el envío del formulario
    document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
// Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var comentarios = document.getElementById("comentarios").value;
    
// alerta con los datos ingresados
    var mensaje = "Nombre: " + nombre + "\n" +
                  "E-mail: " + email + "\n" +
                  "Comentarios: " + comentarios;
    alert(mensaje);
  
// Restablecer los valores del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comentarios").value = "";
  });
  