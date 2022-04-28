module.exports = (sequelize, dataTypes) => {

    let alias = 'Color'

    let col = {
            color_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            color:{
                type: dataTypes.STRING,
                notNull: true

            } 
    }
    let config = {

        timestamps: false

    }


    const Color = sequelize.define(alias, col, config);

    Color.associate = function(models) {
        Color.hasMany(models.Product, {
            as:"products",
            foreingKey: "product_id"
        });


    return Color;
}
}