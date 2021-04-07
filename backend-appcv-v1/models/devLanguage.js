module.exports = (sequelize, DataTypes) => {
    const DevLanguage = sequelize.define("DevLanguage", {
        idDevLanguage: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameDevLanguage: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    DevLanguage.associate = models => {
        DevLanguage.hasOne(models.DevLanguageProject,{
            foreignKey:{
            name: 'idDevLanguage',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return DevLanguage;
};