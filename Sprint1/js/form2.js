function validar_correo(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (email.length >= 15 && email.length <=40){
        if(email.indexOf('@') !== -1){
            if((email.indexOf(".com") || email.indexOf(".org") || email.indexOf(".es") || email.indexOf(".co")) !== -1) {
                if (re.test(email)) {
                    //alert("Cumple la expresión");
                    return true;
                } else {
                    //alert("No cumple la expresión");
                    return false;
                }
            }else {
                //alert("No hay .com, .org, .com .es");
                return false;
            }
        } else {
            //alert("No hay @");
            return false;
        }
    } else {
        //alert("La cadena no aplica");
        return false;
    }
}

function validar_contrasena_usuario(usuario, contrasena ){
    var okUsuario = validarPolitica(usuario)
    //var okContrasena = validarPolitica(contrasena)
    
    var re = /(?=^[A-Z])/;
    

    if(okUsuario) //&& okContrasena)
        return true;
    else
        return re.test(usuario)
    
}

function validarPolitica(string){
    var re = /[@]/;
    
    if (string.length >= 6){
        //alert("la cadena es menor a 6");
        return true;
    }
    if (string.length <= 12){
        //alert("la cadena es mayor a 12");
        return true;
    }
    if (re.test(string)){
        //alert("la cadena CONTIENE UN @");
        return true;    
    }

    return false;
}


module.exports.validar_correo = validar_correo;
module.exports.validar_contrasena_usuario = validar_contrasena_usuario;
module.exports.validarPolitica = validarPolitica;