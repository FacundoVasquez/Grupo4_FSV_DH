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


//                  *****PRUEBA CARRITO*****
// ARRAY DE PRODUCTOS EN VENTA

const productos = [
    {
        id: 1,
        nombre: 'Remera',
        precio: 1,
        imagen: ''
    },
    {
        id: 2,
        nombre: 'taza',
        precio: 1.2,
        imagen: ''
    },
    {
        id: 3,
        nombre: 'gorra',
        precio: 2.1,
        imagen: ''
    },
    {
        id: 4,
        nombre: 'botella',
        precio: 0.6,
        imagen: ''
    },
    {
        id: 5,
        nombre: 'buzo',
        precio: 0.6,
        imagen: ''
    }

];

let carrito = [];//ARRAY DE PRODUCTOS AGREGADOS A CARRITO
const divisa = '$';
const DOMitems = document.querySelector('#submit');//id sumbit
const DOMcarrito = document.querySelector('#productosCarrito');//
const DOMtotal = document.querySelector('#total');//total
const DOMbotonVaciar = document.querySelector('#boton-vaciar');//=
DOMitems.addEventListener('click', anyadirProductoAlCarrito)
DOMbotonVaciar.setAttribute("marcador", info.id)


// Funciones
//Renderiza todos los productos a partir de array productos. No confundir con el carrito
function anyadirProductoAlCarrito(e) 
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(e.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();

function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = productos.map((producto) => {
            // ¿Coincide las id? Solo puede existir un caso
            return producto.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].name} - ${miItem[0].price}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}


// Evento para borrar un elemento del carrito
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

// Calcula el precio total teniendo en cuenta los productos repetidos

function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = productos.map((productos) => {
            return productos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

// Vacia el carrito y vuelve a dibujarlo
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);
 
function renderizarProductos() {
    fetch('http://localhost:3000/api')    
    .then(res=>res.json())
    .then((res) => {
        res.data.forEach(producto => {
        let miNodoCardBody =document.createElement('div')
        miNodoCardBody.classList.add('card-body')
        let imagenCarrito = document.getElementById('imagen-producto')
        imagenCarrito.innerHTML(`${producto.img}`)
        let nombreProductoCarrito = document.getElementsByClass('product-name')
        nombreProductoCarrito.innerHTML(`${producto.name}`)
        let precioProductoCarrito = document.getElementByClass('product-price')
        precioProductoCarrito.innerHTML(`${producto.price}`)
        
        });
        
    })//CHEQUEAR LOS .THEN
    .then((res) =>{
        anyadirProductoAlCarrito()
        res.render('productCart')
    }) 
    .then((res)=>{
        renderizarCarrito()
        res.render('productCart')
    })
    
    }
