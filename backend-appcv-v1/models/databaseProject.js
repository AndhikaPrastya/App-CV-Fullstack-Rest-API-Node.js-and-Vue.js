module.exports = (sequelize, DataTypes) => {
    const DatabaseProject = sequelize.define("DatabaseProject", {
        idDatabaseProject: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        }

    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    return DatabaseProject;
};