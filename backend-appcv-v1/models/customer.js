module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
        idCustomer: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
         nameCustomer: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Customer.associate = models => {
        Customer.hasOne(models.Project,{
            foreignKey:{
            name: 'idCustomer',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });
    };

    return Customer;
};