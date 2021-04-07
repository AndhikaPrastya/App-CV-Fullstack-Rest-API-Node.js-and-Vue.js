module.exports = (sequelize, DataTypes) => {
    const Training = sequelize.define("Training", {
        idTraining: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        titleTraining: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        providerTraining: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        placeTraining: {
            type: DataTypes.STRING(50)
        },
        dateTraining: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        durationTraining: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        certificateTraining: {
            type: DataTypes.STRING(10)
        },
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    return Training;
};