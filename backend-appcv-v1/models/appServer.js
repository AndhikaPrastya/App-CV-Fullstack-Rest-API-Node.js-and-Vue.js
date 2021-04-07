module.exports = (sequelize, DataTypes) => {
    const AppServer = sequelize.define("AppServer", {
        idAppServer: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameAppServer: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    AppServer.associate = models => {
        AppServer.hasOne(models.AppServerProject,{
            foreignKey:{
            name: 'idAppServer',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return AppServer;
};