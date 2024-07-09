function validarFormulario(){
    //nombre
    let nombreInput = document.getElementsByName('nombre')[0];

    if(nombre === ""){
        alert('Escriba su nombre por favor');
        nombreInput.focus();
        return false; 
    }
    
    if(nombre.length > 30) {
        alert('Excede los caracteres permitidos');
        nombreInput.focus();
        return false;
    }

    //email
    let emailInput = document.getElementsByName('email')[0];

    if(email === ""){
        alert('Por favor, escribe tu email');
        emailInput.focus();
        return false; 
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Escriba un email válido. Ejemplo: texto@gmail.com');
        emailInput.focus();
        return false;
    }
    
    //asunto
    let asuntoInput = document.getElementsByName('asunto')[0];
    
    if(asunto === ""){
        alert('Escriba un asunto por favor');
        asuntoInput.focus();
        return false; 
    }

    if (asunto.length > 40) {
        alert('Excede los caracteres permitidos');
        asuntoInput.focus();
        return false;
    }

    //mensaje
    let mensajeTextArea = document.getElementsByName('mensaje')[0];

    if(mensaje === ""){
        alert('Escriba un mensaje por favor');
        mensajeTextArea.focus();
        return false; 
    }

    if (mensaje.length > 200) {
        alert('Excede los caracteres permitidos');
        mensajeTextArea.focus();
        return false;
    }

    return true;
}

