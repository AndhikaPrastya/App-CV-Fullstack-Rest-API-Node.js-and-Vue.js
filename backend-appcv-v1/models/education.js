module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define("Education", {
        idEducation: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        school: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        degree: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        subject: {
            type: DataTypes.STRING(50),
        },
        priodFrom: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        priodTo: {
            type: DataTypes.DATEONLY,
        },
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    return Education;
};