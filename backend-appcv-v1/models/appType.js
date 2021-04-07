module.exports = (sequelize, DataTypes) => {
    const AppType = sequelize.define("AppType", {
        idAppType: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameAppType: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    AppType.associate = models => {
        AppType.hasOne(models.AppTypeProject,{
            foreignKey:{
            name: 'idAppType',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return AppType;
};