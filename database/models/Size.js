module.exports = (sequelize, dataTypes) => {

    let alias = 'Size'

    let col = {
            size_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            size:{
                type: dataTypes.STRING,
                notNull: true

            } 
    }
    let config = {

        timestamps: false

    }


    const Size = sequelize.define(alias, col, config);

    Size.associate = function(models) {
        Size.hasMany(models.Product, {
            as:"products",
            foreignKey: "product_id"
        });

}
return Size;

}
