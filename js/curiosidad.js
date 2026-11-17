function mostrarCuriosidad() {
    
    let texto = document.getElementById("curiosidad");
    
    texto.classList.toggle("oculto");
}




function cambiarImagen(color) {
    
    let imagen = document.getElementById("imagenMoto");
    
   
    if (color === 'verde') {
        imagen.src = "../fotos/coloresN/vedeN.png"; 
    } else if (color === 'negra') {
        imagen.src = "../fotos/coloresN/AzulN.png"; 
    } else if (color === 'Blanco') {
        imagen.src = "../fotos/coloresN/blancoN.png"; 
    }
}
function cambiarImagenA(color) {
    
    let imagen = document.getElementById("imagenMoto2");
    
   
    if (color === 'gris') {
        imagen.src = "../fotos/coloresN/z900plata.png"; 
    } else if (color === 'verde') {
        imagen.src = "../fotos/coloresN/z900verde.png"; 
    } else if (color === 'rojo') {
        imagen.src = "../fotos/coloresN/z900Rojo.png"; 
    }
}
function cambiarImagenB(color) {
    
    let imagen = document.getElementById("imagenMoto3");
    
   
    if (color === 'Azul') {
        imagen.src = "../fotos/coloresN/w800azul.png"; 
    } else if (color === 'Blanco') {
        imagen.src = "../fotos/coloresN/w800blanco.png"; 
    } else if (color === 'Negro') {
        imagen.src = "../fotos/coloresN/w800negra.png"; 
    }
}