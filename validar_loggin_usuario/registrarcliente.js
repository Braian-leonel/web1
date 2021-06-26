function validar(){
    var nombre, apellido, dni, direccion, numero, correo, telefono, password;
    var exp_nombre_apellido, exp_dni, exp_direccion, exp_numero, exp_correo, exp_telefono, exp_password;
    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    dni = document.getElementById("DNI").value;
    direccion = document.getElementById("Direccion").value;
    numero = document.getElementById("Numero").value;
    correo = document.getElementById("Correo").value;
    telefono = document.getElementById("Numero telefono").value;
    password = document.getElementById("password").value;
    
    exp_nombre_apellido= /^[a-zA-ZÀ-ÿ\s]/;
    exp_dni= /^\d{8}$/;
    exp_direccion = /[A-Za-z0-9]+/g;
    exp_numero = /^\d{3}/;
    exp_correo = /\w+@\w+\.+[a-z]/;
    exp_telefono = /^\d{8}$/;
    exp_contra = /^.{4,12}/;

    if(nombre == "" || apellido == "" || dni == "" || direccion == "" || numero == "" || correo == "" || telefono == ""
    || password == ""){
        alert("todos los campos son obligatorios");
        return false;
    }else if(nombre.lenght <= 20 || !nombre.match(exp_nombre_apellido)){
        alert("El nombre es muy largo y/o el caracter ingresado es incorrecto");
        return false;
    }else if(apellido.lenght <= 20 || !apellido.match(exp_nombre_apellido)){
        alert("El nombre es muy largo y/o el caracter ingresado es incorrecto");
        return false;
    }else if(!dni.match(exp_dni)){
        alert("El dni ingresado es invalido");
        return false;
    }else if(direccion.lenght<=20 || !direccion.match(exp_direccion)){
        alert("La direccion ingresad es invalido");
        return false;
    }else if(!direccion.match(exp_direccion)){
        alert("el correo ingresado es invalido");
        return false;
    }else if(!telefono.match(exp_telefono)){
        alert("El numero telefonico ingresado es invalido");
        return false;
    }else if(!password.match(exp_password)){
        alert("La contraseña es invalida");
        return false;
    }
    



}