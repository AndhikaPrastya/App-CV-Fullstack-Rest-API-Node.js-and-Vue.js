module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define("Company", {
        idCompany: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameCompany: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        addressCompany: {
            type: DataTypes.STRING(200),
        },
        contactCompany: {
            type: DataTypes.STRING(20)
        },
        priodFrom: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        priodTo: {
            type: DataTypes.DATEONLY,
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Company.associate = models => {
        Company.hasMany(models.RelevanExperience,{
            foreignKey:{
            name: 'idCompany',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return Company;
};