const {Product} = require("../../../database/models");
const {Op} = require('sequelize')


const productApiController = {
    list:(req,res) => {
Product.findAll()
.then(products=> {
    return res.json({
        total: products.length,
        data: products,
        status: 200
        })
     })
    },

show: (req,res)=>{
Product.findByPk(req.params.id)
.then(product =>{
    return res.json({
        data:product,
        status: 200
    })
})
},

store: (req,res)=>{
    Product.create(req.body)
    .then(product =>{
        return res.json({
            data:product,
            status: 200,
            created: 'ok'
        })
    })
    },

edit: (req,res)=>{
	Product.update({
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			description: req.body.description
		  },
          {
			  where:{
				  products_id: req.params.id
			    }
            })

          .then(product => {
              return res.json(product)
          })
        },
		  

delete: (req, res)=>{
        Product.destroy({
            where:{
                products_id: req.params.id
            }
        })
        .then(response => {
            return res.json(response)
        })
    },

search: (req, res)=>{
        Product.findAll({
            where:{
                name:{ [Op.like] : '%' + req.query.keyword +'%'}
            }
        })
        .then(productos =>{
            return res.json(productos)
        })
    }
    



}

module.exports = productApiController;