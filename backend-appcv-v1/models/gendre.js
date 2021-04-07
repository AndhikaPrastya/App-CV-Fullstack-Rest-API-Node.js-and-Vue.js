module.exports = (sequelize, DataTypes) => {
    const Gendre = sequelize.define("Gendre", {
        idGendre: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameGendre: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Gendre.associate = models => {
        Gendre.hasOne(models.Person,{
            foreignKey:{
            name: 'idGendre',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return Gendre;
};