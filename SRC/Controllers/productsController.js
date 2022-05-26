//Se requieren los módulos necesarios
const path = require("path");
const fs = require("fs");
const {Product} = require("../../database/models");
const {Op} = require('sequelize');
 

//Se definen las rutas hacia los JSONs
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: async (req, res) => {
		const products = await Product.findAll()
        return res.render("products", {products});
    },

	search: (req, res)=>{
        Product.findAll({
            where:{
                name:{ [Op.like] : '%' + req.params.query.term +'%'}
            }
        })
        .then(productos =>{
			return res.render("products", {products: productos});
        })
    },
    
    detail: async (req, res) => {
        const productIdToFind = req.params.id;
		const producto = await Product.findByPk(productIdToFind);
			
			if(!producto) {
				return res.send("Producto NO Encontrado");						
			} else {
				return res.render("productDetail", { producto });
			};
		},

    
    create: (req, res) => {
        return res.render("productCreate")
    },

    store: async(req, res) => {
		console.log(req.body.img)
		await Product.create({
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			description: req.body.description,
			img: req.file.filename,
		  })
		  return res.redirect("/")
		},

    productCart: (req, res) => {
		 
        return res.render("productCart")
	},

	// Update - Form to edit
	edit: async(req, res) => {
		const idProducto = req.params.id;
		const productToEdit = await Product.findByPk(idProducto);
		if (!productToEdit) {
			return res.send('ERROR NO EXISTE PRODUCTO')
		}

		return res.render('productEdit', { productToEdit })
	},


	// Update - Method to update
	update: async (req, res) => {
		console.log(req.file.filename)

		if (req.file.filename  == undefined) {
		await Product.update({

			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			description: req.body.description,

		  },
		  {
			  where:{
				  products_id: req.params.id
			  }
				});

			  res.redirect("/product")

			}else{
				await Product.update({
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				description: req.body.description,
				img: req.file.filename,
				
			  },
			  {
				  where:{
					  products_id: req.params.id
				  }
				})
					
				  res.redirect("/")
			}
		  },

    
    // Delete - Delete one product from DB
	delete: async (req, res) => {
		await Product.destroy({
			where:{
				products_id: req.params.id
			}
		}),
		res.redirect('/')

		// Do the magic
	},
	indumentaria: (req, res)=>{
        Product.findAll({
            where:{
				category_id : 1,
            }
        })
        .then(productos =>{
			return res.render("products", {products: productos});
        })
    },
	accesorios: (req, res)=>{
        Product.findAll({
            where:{
				category_id : 2,
            }
        })
        .then(productos =>{
			return res.render("products", {products: productos});
        })
    },
	botellas: (req, res)=>{
        Product.findAll({
            where:{
				category_id : 3,
            }
        })
        .then(productos =>{
			return res.render("products", {products: productos});
        })
    },


    
    
};

module.exports = controller;
