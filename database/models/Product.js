module.exports = (sequelize, dataTypes) => {

    let alias = 'Product'

    let col = {
            products_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name:{
                type: dataTypes.STRING,
                notNull: true,
                unique: true

            } , 
            price:{
                type: dataTypes.STRING,
                notNull: true,
                
            },
            discount:{
                type: dataTypes.STRING,
                notNull: true,
            },
            img:{
                type: dataTypes.TEXT
            },
            description:{
                type: dataTypes.TEXT
            },
            lead_time:{
                type: dataTypes.TEXT,
                defaultValue: 1

            },
            size_id:{
                type: dataTypes.TEXT,
                defaultValue: 1

                
            },
            color_id:{
                type: dataTypes.TEXT,
                defaultValue: 1

            },
            category_id:{
                type: dataTypes.TEXT,
                defaultValue: 1

            },
            features:{
                type:dataTypes.STRING,
                notNull: true,
                defaultValue: false

            }


    }
    let confi = {

        timestamps: false

    }


    const Product = sequelize.define(alias, col, confi);

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as:"category",
            foreignKey: "category_id"
        });
        Product.belongsTo(models.Color,{
            as:"color",
            foreignKey: "color_id"
    
        });
        Product.belongsTo(models.Size,{
            as:"size",
            foreignKey: "size_id"
    
        });
       
    }

    return Product;
}



