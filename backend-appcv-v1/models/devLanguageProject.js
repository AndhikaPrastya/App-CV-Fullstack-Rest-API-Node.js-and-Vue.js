module.exports = (sequelize, DataTypes) => {
    const DevLanguageProject = sequelize.define("DevLanguageProject", {
        idDevLanguageProject: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        }

    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    return DevLanguageProject;
};