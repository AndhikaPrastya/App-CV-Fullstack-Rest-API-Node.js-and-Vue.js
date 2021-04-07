module.exports = (sequelize, DataTypes) => {
    const DevTool = sequelize.define("DevTool", {
        idDevTool: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameDevTool: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    DevTool.associate = models => {
        DevTool.hasOne(models.DevToolProject,{
            foreignKey:{
            name: 'idDevTool',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return DevTool;
};