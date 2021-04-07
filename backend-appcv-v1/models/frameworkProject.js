module.exports = (sequelize, DataTypes) => {
    const FrameworkProject = sequelize.define("FrameworkProject", {
        idFrameWorkProject: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        }

    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    return FrameworkProject;
};