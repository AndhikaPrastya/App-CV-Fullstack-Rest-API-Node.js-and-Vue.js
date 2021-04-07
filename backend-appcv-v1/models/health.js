module.exports = (sequelize, DataTypes) => {
    const Health = sequelize.define("Health", {
        idHealth: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameHealth: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

     Health.associate = models => {
        Health.hasOne(models.Person,{
            foreignKey:{
            name: 'idHealth',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return Health;
};