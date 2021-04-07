module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define("Course", {
        idCourse: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        titleCourse: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        providerCourse: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        placeCourse: {
            type: DataTypes.STRING(50)
        },
        dateCourse: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        durationCourse: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        certificateCourse: {
            type: DataTypes.STRING(10)
        },
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    return Course;
};