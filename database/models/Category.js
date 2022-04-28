module.exports = (sequelize, dataTypes) => {

    let alias = 'Category'

    let col = {
            category_id: {
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


    const Category = sequelize.define(alias, col, config);

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as:"products",
            foreingKey: "product_id"
        });

    return Category;
}
}
