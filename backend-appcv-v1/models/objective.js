module.exports = (sequelize, DataTypes) => {
    const Objective = sequelize.define("Objective", {
        idObjective: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        descObjective: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Objective.associate = models => {
        Objective.belongsTo(models.Person,{
            foreignKey: 'idPerson',
            allowNull: false
        });
    };


    return Objective;
};