module.exports = (sequelize, dataTypes) => {

    let alias = 'User'

    let col = {
            user_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email:{
                type: dataTypes.STRING,
                notNull: true,
                unique: true

            } , 
            password:{
                type: dataTypes.STRING,
                notNull: true,
                
            },
            name:{
                type: dataTypes.STRING,
                notNull: true,
            },
            img:{
                type: dataTypes.TEXT
            }

    }
    let config = {

        timestamps: false

    }


    const User = sequelize.define(alias, col, config);

    User.associate = function(models) {
        User.hasMany(models.Product, {
            as:"produts",
            foreignKey: "products_id"
        });

}
return User;


}





