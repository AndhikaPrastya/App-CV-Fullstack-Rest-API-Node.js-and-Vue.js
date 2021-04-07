module.exports = (sequelize, DataTypes) => {
    const AppTypeProject = sequelize.define("AppTypeProject", {
        idAppTypeProject: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        }

    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    return AppTypeProject;
};