module.exports = (sequelize, dataTypes) => {

    let alias = 'Order'

    let col = {
            order_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id:{
                type: dataTypes.INTEGER,
                notNull: true

            },
            date:{
                type: dataTypes.date,
                notNull: true

            },
            product_id:{
                type: dataTypes.INTEGER,
                notNull: true

            },
            quantity:{
                type: dataTypes.INTEGER,
                notNull: true

            },
            total:{
                type: dataTypes.INTEGER,
                notNull: true

            },

    }
    let config = {

        timestamps: false

    }


    const Order = sequelize.define(alias, col, config);

    Order.associate = function(models) {
        Order.hasMany(models.Product, {
            as:"products",
            foreignKey: "products_id"
        });
        Order.belongsTo(models.User, {
            as:"user",
            foreignKey: "user_id"
        });

}
return Order;

}