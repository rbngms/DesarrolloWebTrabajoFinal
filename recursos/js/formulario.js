
////FORMULARIO CONTACTO


function setData (){

    let nombre_usuario = document.getElementById("nombre_formulario");
    let correo_usuario = document.getElementById("correo_formulario");
    let asunto_usuario = document.getElementById("asunto_formulario");
    let mensaje_usuario = document.getElementById("mensaje_formulario");


    let cliente = {"nombre_formulario": nombre_usuario.value, "correo_formulario":correo_usuario.value,"asunto_formulario":asunto_usuario.value, "mensaje_formulario":mensaje_usuario.value };
    let clienteJSON = JSON.stringify(cliente);
    localStorage.setItem(localStorage.length+1, clienteJSON);
    console.log (clienteJSON.nombre)

    localStorage.setItem(localStorage.length+1,clienteJSON);

    let sinJSON = JSON.parse (clienteJSON);

    console.log(sinJSON);
    console.log(clienteJSON);
}

let boton_formulario = document.getElementById("boton_formulario");

///boton_formulario.addEventListener("click", setData)

////LIBRERIA SWEET ALERT

let boton_saludo = document.getElementById("boton_formulario");

boton_saludo.addEventListener("click", function(){
    Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Enviado correctamente',
        showConfirmButton: false,
        timer: 3000
      })



})

////Borrar Formulario

let formu = document.getElementById("form");

formu.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  formu.reset();
});



///ENVIAR FORMULARIO

const btn = document.getElementById('boton_formulario');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'ENVIANDO...';

   const serviceID = 'default_service';
   const templateID = 'template_1dad5y9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR';
      location.reload();
    }, (err) => {
      btn.value = 'ENVIAR';
      alert(JSON.stringify(err));
    });
});

