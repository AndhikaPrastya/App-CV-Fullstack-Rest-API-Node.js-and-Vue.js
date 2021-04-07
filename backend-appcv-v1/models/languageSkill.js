module.exports = (sequelize, DataTypes) => {
    const LanguageSkill = sequelize.define("LanguageSkill", {
        idLanguageSkill: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        }

    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    LanguageSkill.associate = models => {
        LanguageSkill.belongsTo(models.Person,{
            foreignKey: 'idPerson',
            allowNull: false
        });

        LanguageSkill.belongsTo(models.Language,{
            foreignKey: 'idLanguage',
            allowNull: false
        });

        LanguageSkill.belongsTo(models.Level,{
            foreignKey: 'idLevel',
            allowNull: false
        });
    };

    return LanguageSkill;
};