module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define("Person", {
        idPerson: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        namePerson: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        birthPlace: {
            type: DataTypes.STRING(25)
        },
        birthDate: {
            type: DataTypes.DATEONLY
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        }

    },{
        createdAt: false,
        updateAt: false,
        timestamps: false
    });

    Person.associate = models => {
        Person.belongsTo(models.Religion,{
            foreignKey: 'idReligion',
            allowNull: false
        });

        Person.belongsTo(models.Gendre,{
            foreignKey: 'idGendre',
            allowNull: false
        });

        Person.belongsTo(models.Health,{
            foreignKey: 'idHealth',
            allowNull: false
        });

        Person.hasMany(models.LanguageSkill,{
            foreignKey:{
            name: 'idPerson',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });

        Person.hasMany(models.Objective,{
            foreignKey:{
            name: 'idPerson',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });

        Person.hasMany(models.Profile,{
            foreignKey:{
            name: 'idPerson',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });

        Person.hasMany(models.Education,{
            foreignKey:{
            name: 'idPerson',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            } 
        });

        Person.hasMany(models.Course,{
            foreignKey:{
            name: 'idPerson',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            }
        });

        Person.hasMany(models.Training,{
            foreignKey:{
            name: 'idPerson',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            }
        });

        Person.hasMany(models.Company,{
            foreignKey:{
            name: 'idPerson',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            }
        });

        Person.hasMany(models.Project,{
            foreignKey:{
            name: 'idPerson',
            allowNull: false,
            onDelete: 'cascade',
            onUpdate: 'cascade'
            }
        });
    };

    return Person;
};