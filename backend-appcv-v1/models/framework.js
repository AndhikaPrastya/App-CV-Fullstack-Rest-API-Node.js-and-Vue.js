module.exports = (sequelize, DataTypes) => {
    const Framework = sequelize.define("Framework", {
        idFramework: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameFramework: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Framework.associate = models => {
        Framework.hasOne(models.FrameworkProject,{
            foreignKey:{
            name: 'idFramework',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return Framework;
};