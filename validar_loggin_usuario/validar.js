const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
	dni: /^.{8}$/, // 7 a 14 numeros.
    password: /^.{4,12}$/, // 4 a 12 digitos.
}
const campos = {
    nombre: false,
    apellido: false,
    dni: false,
    password: false
}

const validarFormulario = (e) =>{
    switch(e.target.name){
        case "nombre":
                if(expresiones.nombre.test(e.target.value)){
                    document.getElementById('grupo__nombre').classList.remove('input-contenedor-incorrecto');
                    document.getElementById('grupo__nombre').classList.add('input-contenedor-correcto');
                    document.querySelector('#grupo__nombre i').classList.add('fa-check-circle');
                    document.querySelector('#grupo__nombre i').classList.remove('fa-times-circle');
                    document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');
                }else{
                    document.getElementById('grupo__nombre').classList.add('input-contenedor-incorrecto');
                    document.getElementById('grupo__nombre').classList.remove('input-contenedor-correcto');    
                    document.querySelector('#grupo__nombre i').classList.add('fa-times-circle');
                    document.querySelector('#grupo__nombre i').classList.remove('fa-check-circle');
                    document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
                }
        break;
        case "apellido":
                if(expresiones.apellido.test(e.target.value)){
                    document.getElementById('grupo__apellido').classList.remove('input-contenedor-incorrecto');
                    document.getElementById('grupo__apellido').classList.add('input-contenedor-correcto');
                    document.querySelector('#grupo__apellido i').classList.add('fa-check-circle');
                    document.querySelector('#grupo__apellido i').classList.remove('fa-times-circle');
                    document.querySelector('#grupo__apellido .formulario__input-error').classList.remove('formulario__input-error-activo');
                }else{
                    document.getElementById('grupo__apellido').classList.add('input-contenedor-incorrecto');
                    document.getElementById('grupo__apellido').classList.remove('input-contenedor-correcto');    
                    document.querySelector('#grupo__apellido i').classList.add('fa-times-circle');
                    document.querySelector('#grupo__apellido i').classList.remove('fa-check-circle');
                    document.querySelector('#grupo__apellido .formulario__input-error').classList.add('formulario__input-error-activo');
                }
        break;
        case "dni":
                if(expresiones.dni.test(e.target.value)){
                    document.getElementById('grupo__dni').classList.remove('input-contenedor-incorrecto');
                    document.getElementById('grupo__dni').classList.add('input-contenedor-correcto');
                    document.querySelector('#grupo__dni i').classList.add('fa-check-circle');
                    document.querySelector('#grupo__dni i').classList.remove('fa-times-circle');
                    document.querySelector('#grupo__dni .formulario__input-error').classList.remove('formulario__input-error-activo');
                }else{
                    document.getElementById('grupo__dni').classList.add('input-contenedor-incorrecto');
                    document.getElementById('grupo__dni').classList.remove('input-contenedor-correcto');    
                    document.querySelector('#grupo__dni i').classList.add('fa-times-circle');
                    document.querySelector('#grupo__dni i').classList.remove('fa-check-circle');
                    document.querySelector('#grupo__dni .formulario__input-error').classList.add('formulario__input-error-activo');
                }
             break;
        case "password":
                 if(expresiones.password.test(e.target.value)){
                    document.getElementById('grupo__password').classList.remove('input-contenedor-incorrecto');
                    document.getElementById('grupo__password').classList.add('input-contenedor-correcto');
                    document.querySelector('#grupo__password i').classList.add('fa-check-circle');
                    document.querySelector('#grupo__password i').classList.remove('fa-times-circle');
                    document.querySelector('#grupo__password .formulario__input-error').classList.remove('formulario__input-error-activo');
                }else{
                    document.getElementById('grupo__password').classList.add('input-contenedor-incorrecto');
                    document.getElementById('grupo__password').classList.remove('input-contenedor-correcto');    
                    document.querySelector('#grupo__password i').classList.add('fa-times-circle');
                    document.querySelector('#grupo__password i').classList.remove('fa-check-circle');
                    document.querySelector('#grupo__password .formulario__input-error').classList.add('formulario__input-error-activo');
            }
             break;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
})

















/*function validar(){
    var nombre, apellido, dni, password,exp_nombre,exp_apellido,exp_dni,exp_contra;
    
    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    dni = document.getElementById("DNI").value;
    password = document.getElementById("password").value;
    exp_nombre= /^[a-zA-ZÀ-ÿ\s]/;
    exp_apellido= /^[a-zA-ZÀ-ÿ\s]/;
    exp_dni= /^\d{8}/;
    exp_contra = /^.{4,12}/;


    if(nombre == "" || apellido == "" || dni == "" || password == ""){
        alert("Todos los campos son obligatorio");
        return false;
    }else if(nombre.length>20 || !nombre.match(exp_nombre)){
        alert("El nombre es muy largo y/o el caracter ingresado es incorrecto")
        return false;
    }
    else if(apellido.length>20 || !apellido.match(exp_apellido)){
        alert("El apellido es muy largo y/o el caracter ingresado es incorrecto")
        return false;
    }
    else if(!dni.match(exp_dni)){
        alert("El dni ingresado es invalido y/o el caracter ingresado es incorrecto")
        return false;
    }
    else if(password.length>12 || !password.match(exp_contra)){
        alert("El password ingresado es invalido y/o el caracter ingresado es incorrecto")
        return false;
    }
}*/