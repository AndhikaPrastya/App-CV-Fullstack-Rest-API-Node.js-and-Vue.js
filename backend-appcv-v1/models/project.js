module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define("Project", {
        idProject: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        nameProject: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        priodFrom: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        priodTo: {
            type: DataTypes.DATEONLY
        },
        descProject: {
            type: DataTypes.STRING(200)
        },
        technicalInfo: {
            type: DataTypes.STRING(200)
        },
        totherInfo: {
            type: DataTypes.STRING(200)
        }
    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Project.associate = models => {

        Project.hasMany(models.AppTypeProject,{
            foreignKey:{
            name: 'idProject',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });

        Project.hasMany(models.ServerOsProject,{
            foreignKey:{
            name: 'idProject',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });

        Project.hasMany(models.DatabaseProject,{
            foreignKey:{
            name: 'idProject',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });

        Project.hasMany(models.AppServerProject,{
            foreignKey:{
            name: 'idProject',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });

        Project.hasMany(models.FrameworkProject,{
            foreignKey:{
            name: 'idProject',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            }
        });

        Project.hasMany(models.DevToolProject,{
            foreignKey:{
            name: 'idProject',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            }
        });

        Project.hasMany(models.DevLanguageProject,{
            foreignKey:{
            name: 'idProject',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            }
        });
        
    };



    return Project;
};