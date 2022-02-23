const divTopText = document.getElementById('divTopText');
const fontColor = document.getElementById ('color-text');
const fontType = document.getElementById('option');
const fontSize = document.getElementById ('fontSize');

//TEXTO
topText.addEventListener('keyup', ()=> {
    divTopText.innerHTML=topText.value;
});

//COLOR DE FUENTE
fontColor.addEventListener('input', (e) => {
    divTopText.style.color = e.target.value;
    fontColor.innerText = `${e.target.value}`;
});

//TIPO DE FUENTE
fontType.addEventListener('change',()=>{
    divTopText.style.fontFamily = `${option.value}`;
    
});  

//TAMAÑO DE FUENTE
fontSize.addEventListener('change', () =>{
    divTopText.style.fontSize = `${fontSize.value}px`;
});
