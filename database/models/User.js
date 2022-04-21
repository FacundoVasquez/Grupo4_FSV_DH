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
    let confi = {
        tableName: 'user',
        timestamps: false

    }


    const User = sequelize.define(alias, col, confi);

    return User;
}







