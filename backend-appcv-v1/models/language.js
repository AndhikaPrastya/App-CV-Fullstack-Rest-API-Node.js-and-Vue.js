module.exports = (sequelize, DataTypes) => {
    const Language = sequelize.define("Language", {
        idLanguage: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        language: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Language.associate = models => {
        Language.hasOne(models.LanguageSkill,{
            foreignKey:{
            name: 'idLanguage',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return Language;
};