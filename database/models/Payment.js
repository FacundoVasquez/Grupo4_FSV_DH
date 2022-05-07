module.exports = (sequelize, dataTypes) => {

    let alias = 'Payment'

    let col = {
            payment_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            method:{
                type: dataTypes.STRING,
                notNull: true

            },
            
        }
    }
    let config = {

        timestamps: false

    }


    const Payment = sequelize.define(alias, col, config);

    Payment.associate = function(models) {
        Payment.belongsTo(models.Cart, {
            as:"cart",
            foreignKey: "cart_id"
        });

}
return Cart;