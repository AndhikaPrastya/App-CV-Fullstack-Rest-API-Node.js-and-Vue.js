module.exports = (sequelize, DataTypes) => {
    const Religion = sequelize.define("Religion", {
        idReligion: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameReligion: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Religion.associate = models => {
        Religion.hasOne(models.Person,{
            foreignKey:{
            name: 'idReligion',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return Religion;
};