module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("Role", {
        idRole: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameRole: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Role.associate = models => {
        Role.hasMany(models.RelevanExperience,{
            foreignKey:{
            name: 'idRole',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    Role.associate = models => {
        Role.hasMany(models.Project,{
            foreignKey:{
            name: 'idRole',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return Role;
};