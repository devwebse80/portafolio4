var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu")
function abrirmenu() {
    sidemenu.style.right = "0";
}

function cerrarmenu() {
    sidemenu.style.right = "-200px";
}


//funcion para el boton contactame 
 function enviarWhatsApp(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    // Obtener valores del formulario
    const nombre = document.getElementById("name").value;
    const correo = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Crear el mensaje para enviar por WhatsApp
    const texto = `Hola, soy ${nombre}.\nMi correo es: ${correo}\nMensaje: ${mensaje}`;

    // Número de WhatsApp
    const telefono = "50245984577";

    // Crear la URL de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(texto)}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(url, "_blank");
}
// Funcion para animacion
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Activa la animación cuando el 10% del elemento es visible
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});

//obtener la fecha actual
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
