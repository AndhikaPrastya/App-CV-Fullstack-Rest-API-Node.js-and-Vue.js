module.exports = (sequelize, DataTypes) => {
    const DevToolProject = sequelize.define("DevToolProject", {
        idDevToolProject: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        }

    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    return DevToolProject;
};