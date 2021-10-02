function validar_correo(email){
    var regexp1=/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    var regexp2=/^([\S]){15,40}$/
    if (regexp1.test(email) && regexp2.test(email)) {
        return true
    }else{
        return false
    }
}


function validar_contrasena_usuario(password){
    regexp1=/^([A-Z]{1,}\S+)$/
    regexp2=/^\S{6,12}$/
    if (regexp1.test(password) && regexp2.test(password)) {
        return false
    }else{
        return true

}

module.exports.validar_correo = validar_correo;
module.exports.validar_contrasena_usuario = validar_contrasena_usuario;
