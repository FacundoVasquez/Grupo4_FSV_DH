module.exports = (sequelize, dataTypes) => {

    let alias = 'Cart'

    let col = {
            cart_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            order_id:{
                type: dataTypes.INTEGER,
                notNull: true

            },
            date:{
                type: dataTypes.date,
                notNull: true

            },
            total_cart:{
                type: dataTypes.INTEGER,
                notNull: true

            },
            payment_id:{
                type: dataTypes.INTEGER,
                notNull: true

            },

    }
    let config = {

        timestamps: false

    }


    const Cart = sequelize.define(alias, col, config);

    Cart.associate = function(models) {
        Cart.belongsTo(models.User, {
            as:"user",
            foreignKey: "user_id"
        });
        Cart.hasMany(models.Products, {
            as:"products",
            foreignKey: "products_id"
        });
        Cart.belongsTo(models.Payment, {
            as:"payment",
            foreignKey: "payment_id"
        });

}
return Cart;

}