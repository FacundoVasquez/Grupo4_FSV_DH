module.exports = (sequelize, dataTypes) => {

    let alias = 'Orden'

    let col = {
            orden_id:{
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id:{
                type: dataTypes.INTEGER,
                notNull: true

            },
            date:{
                type: dataTypes.DATE,
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


    const Orden = sequelize.define(alias, col, config);

    Orden.associate = function(models) {
        Orden.hasMany(models.Product, {
            as:"products",
            foreignKey: "products_id"
        });
        Orden.belongsTo(models.Users, {
            as:"users",
            foreignKey: "user_id"
        });

}
return Orden;

}