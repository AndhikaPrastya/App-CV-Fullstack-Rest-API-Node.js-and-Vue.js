module.exports = (sequelize, DataTypes) => {
    const EmployeeStatus = sequelize.define("EmployeeStatus", {
        status: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    EmployeeStatus.associate = models => {
        EmployeeStatus.hasOne(models.Company,{
            foreignKey:{
            name: 'status',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return EmployeeStatus;
};