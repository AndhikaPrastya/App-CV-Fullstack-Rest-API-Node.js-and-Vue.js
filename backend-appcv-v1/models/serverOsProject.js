module.exports = (sequelize, DataTypes) => {
    const ServerOsProject = sequelize.define("ServerOsProject", {
        idServerOsProject: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        }

    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    return ServerOsProject;
};