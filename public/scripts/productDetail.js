const divTopText = document.getElementById('divTopText');
const fontColor = document.getElementById ('color-text');
const fontType = document.getElementById('option');
const fontSize = document.getElementById ('font-size');

//TEXTO
if (divTopText){
    topText.addEventListener('keyup', ()=> {
    divTopText.innerHTML=topText.value;
});
}

//COLOR DE FUENTE
if(fontColor){
    fontColor.addEventListener('input', (e) => {
    divTopText.style.color = e.target.value;
    fontColor.innerText = `${e.target.value}`;
});
}

//TIPO DE FUENTE
if(fontType){
    fontType.addEventListener('change',()=>{
    divTopText.style.fontFamily = `${option.value}`;
    
}); 
}

//TAMAÑO DE FUENTE
if(fontSize){
    fontSize.addEventListener('change', () =>{
    divTopText.style.fontSize = `${fontSize.value}px`;
});
}

//BOTONES TALLES
const queryId = (id) => document.getElementById(id)
const queryClass = (className) => document.getElementsByClassName(className)
let size = undefined

queryId("s").addEventListener("click", () =>{
    size = "s"
    s.style.backgroundColor = ("#328093")
})
queryId("m").addEventListener("click", () =>{
    size = "m"
    m.style.backgroundColor = ("#328093")
})
queryId("l").addEventListener("click", () =>{
    size = "l"
    l.style.backgroundColor = ("#328093")
})
queryId("xl").addEventListener("click", () =>{
    size = "xl"
    xl.style.backgroundColor = ("#328093")
})

