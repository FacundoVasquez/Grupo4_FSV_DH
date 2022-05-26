//API CARRITO
let cart=[]
    fetch('http://localhost:3000/api')    
    .then(res=>res.json())
    .then((res) => {
        res.data.forEach(producto => {
        queryId("productosCarrito").innerHTML = `
        <div class="info-producto">
        <h3>${producto.name}</h3>
        <img src="${producto.img}">
        <span class="precio">${producto.price}</span>
        `
        });
    })