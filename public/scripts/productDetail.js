const {Product} = require("../../database/models");
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

//Vista detalle de producto - Size
const queryId = (id) => document.getElementById(id)
const queryClass = (className) => document.getElementsByClassName(className)
let size = undefined

/*const getFetch = new Promise ((resolve, rejected)=>{
      let condition = true
      const products = Product.findAll()
      .then(products)
        
      if(condition){
          resolve(products)
      }else{
          rejected('error')
      }
  })*/

const requestProduct = () =>{
    getFetch
    .then(res =>cardProduct(res))
}
requestProduct()

const cardProduct = Product.findAll()
      .then((products) => {
    queryId("productosCarrito").innerHTML
    for (const{name, price, img} of products){
        queryId("productosCarrito").innerHTML = `
        <div class="info-producto">
        <h3>${name}</h3>
        <img src="${img}">
        <span class="precio">${price}</span>
        `
    }
})


//botones talles
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