//Se requieren los módulos necesarios
const path = require("path");
const fs = require("fs");
const {Product} = require("../../database/models");

//Se definen las rutas hacia los JSONs
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: async (req, res) => {
		const products = await Product.findAll()
        return res.render("products", {products: products});
    },
    
    detail: async (req, res) => {
        const productIdToFind = req.params.id;
		const products = await Product.findByPk(productIdToFind)
			.then(function(producto){

			if(producto === "undefined") {
				return res.send("Producto NO Encontrado");						
			} else {
				return res.render("productDetail", {producto: producto});
			};
		})},

    
    create: (req, res) => {
        return res.render("productCreate")
    },

    store:  function (req, res) {
		// req.file es una nueva clave que multer le agrega al objeto req 
		// con todos los datos resultantes de procesar el archivo

		// Pushear al array de productos existente un nuevo producto
		// Un nuevo objeto literal


		// Convertir price a número
		// Agregarle ID e Image
		const productToCreate = req.body;
		// Number('123') = 123;
		productToCreate.precio = Number(productToCreate.precio);
		productToCreate.ETA = Number(productToCreate.ETA);
		productToCreate.imagen = req.file.filename;
        if (productToCreate.descuento == '') {
			productToCreate.descuento = 0;
		} else {
			productToCreate.descuento = Number(productToCreate.descuento);
		}

		productToCreate.id = controller.asignarIdAProductoEnBaseAlUltimo();

		// Agregar un elemento a un array 
		// Método Push
		// Array.push(nuevoElemento)
		products.push(productToCreate);

		controller.guardarProductos()
		// Guardar el archivo json con el nuevo array


		return res.redirect("/product")
		

    },
		

    productCart: (req, res) => {
        return res.render ("productCart")
    },

	// Update - Form to edit
	edit: (req, res) => {
		// Encontrar un producto en base a su id
		// Pasarle a la vista los datos de este producto
		// Buscar en array de products
		// El elemento cuyo id sea el enviado por parámetros
		// find()
		// Accedo al id en req.params.id
		const idProducto = req.params.id;
		const productToEdit = products.find((product) => product.id == idProducto);
		if (!productToEdit) {
			return res.send('ERROR NO EXISTE PRODUCTO')
		}

		return res.render('productEdit', { productToEdit })
	},


	// Update - Method to update
	update: (req, res) => {
		// Voy a tener que buscar el indice en el array del producto en base a su id
		const idProducto = req.params.id;
		const indiceDelProducto = products.findIndex((product) => product.id == idProducto);

		products[indiceDelProducto] = { ...products[indiceDelProducto], ...req.body }
		controller.guardarProductos()

		return res.send(products)
		// Do the magic
	},

    
    // Delete - Delete one product from DB
	destroy: (req, res) => {
		// Do the magic
	},

	guardarProductos() {
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
	},

	asignarIdAProductoEnBaseAlUltimo: function () {
		return products[products.length - 1].id + 1;
	}
    
    
};

module.exports = controller;
