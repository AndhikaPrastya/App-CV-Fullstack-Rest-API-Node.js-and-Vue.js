module.exports = (sequelize, DataTypes) => {
    const AppServerProject = sequelize.define("AppServerProject", {
        idAppServerProject: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        }

    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    return AppServerProject;
};