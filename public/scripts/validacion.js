window.addEventListener('load',function(){



let errores = []

let campoNombre = document.querySelector('#user_name');

campoNombre.addEventListener("focus",function(){

    if(campoNombre.value == '' || campoNombre.value.length < 3){

        let pError = document.querySelector('p.error');
    
        pError.innerHTML += "El nombre no puede estar vacio y debe tener al menos 3 caracteres";
    
    } 
    
    
}
)


if(errores.length > 0){
    e.preventDefault()

}


})

