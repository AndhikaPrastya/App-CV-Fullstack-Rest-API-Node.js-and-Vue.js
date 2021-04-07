module.exports = (sequelize, DataTypes) => {
    const Database = sequelize.define("Database", {
        idDatabase: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameDatabase: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Database.associate = models => {
        Database.hasOne(models.DatabaseProject,{
            foreignKey:{
            name: 'idDatabase',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return Database;
};