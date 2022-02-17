const controller = {
    detail: (req, res) => {
     return res.render("productDetail")
        },
    
    store: (req, res) =>{
        return res.render("productCreate")
    },
    
    }

module.exports = controller;
