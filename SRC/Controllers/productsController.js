const controller = {
    detail: (req, res) => {
     return res.render("productDetail")
        },
    
    create: (req, res) => {
        return res.render("productCreate")
           },

    store: (req, res) =>{
        return res.render(req.file)
    },
    
    }

module.exports = controller;
