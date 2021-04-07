module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("Profile", {
        idProfile: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        descProfile: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Profile.associate = models => {
        Profile.belongsTo(models.Person,{
            foreignKey: 'idPerson',
            allowNull: false
        });
    };

    return Profile;
};