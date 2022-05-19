window.addEventListener('load',function(){

let formulario = document.querySelector('.register');
let errores = []
let campoNombre = document.querySelector('#user_name');
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#password')
let pErrorPassword = document.querySelector('p.passwordE')
let pErrorName = document.querySelector('p.error');
let pErrorMail = document.querySelector('p.emailE')


//validacion de nombre
    campoNombre.addEventListener('focusout',function(){
        if(campoNombre.value == ''){
            pErrorName.innerHTML = "El nombre no puede estar vacio y debe tener al menos 3 caracteres";
        }
    });
    campoNombre.addEventListener("keyup",function(){
      if(campoNombre.value.length < 3){
          pErrorName.innerHTML = "El nombre no puede estar vacio y debe tener al menos 3 caracteres";
          errores.push("El nombre no puede estar vacio y debe tener al menos 3 caracteres")
      } else{
          pErrorName.innerHTML = "";
          errores.length = 0;
          }
        });
//validacion de email
    campoEmail.addEventListener("focusout",function(){
            if(campoEmail.value == ''){
                pErrorMail.innerHTML = "El email no puede estar vacio y debe ser un email valido";
                errores.push("El email no puede estar vacio y debe ser un email valido")
            } else{
                pErrorMail.innerHTML = "";
                errores.length = 0;
            }
        });
//validacion de contraseña
    campoPassword.addEventListener('focusout',function(){
        if(campoPassword.value == ''){
            pErrorPassword.innerHTML = "La contraseña no puede estar vacia y debe tener al menos 3 caracteres";
        }
    });
    campoPassword.addEventListener("keyup",function(){
    if(campoPassword.value.length < 3){
        pErrorPassword.innerHTML = "La contraseña no puede estar vacia y debe tener al menos 3 caracteres";
        errores.push("La contraseña no puede estar vacia y debe tener al menos 3 caracteres")
    } else{
        pErrorPassword.innerHTML = "";
        errores.length = 0;
        }
        });

formulario.addEventListener('submit',(e)=>{
            if(errores.length > 0){
                e.preventDefault()
            }
    })
})

