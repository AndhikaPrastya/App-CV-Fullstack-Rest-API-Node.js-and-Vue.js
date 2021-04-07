module.exports = (sequelize, DataTypes) => {
    const Level = sequelize.define("Level", {
        idLevel: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameLevel: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Level.associate = models => {
        Level.hasOne(models.LanguageSkill,{
            foreignKey:{
            name: 'idLevel',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };
    

    return Level;
};