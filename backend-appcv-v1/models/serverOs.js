module.exports = (sequelize, DataTypes) => {
    const ServerOs = sequelize.define("ServerOs", {
        idServerOs: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameServerOs: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    ServerOs.associate = models => {
        ServerOs.hasOne(models.ServerOsProject,{
            foreignKey:{
            name: 'idServerOs',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return ServerOs;
};