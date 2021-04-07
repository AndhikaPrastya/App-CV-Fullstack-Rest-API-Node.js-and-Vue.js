module.exports = (sequelize, DataTypes) => {
    const RelevanExperience = sequelize.define("RelevanExperience", {
        idRelevanExperience: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        descRelevanExperience: {
            type: DataTypes.STRING(255),
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    return RelevanExperience;
};