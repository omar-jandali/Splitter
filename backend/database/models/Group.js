const seq = require('sequelize');
const { database } = require('../index');
const { User } = require('./User')


const Group = database.define(
    "group",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: seq.STRING, allowNull: false, 
             validate: {}
        },
        description: {type: seq.TEXT, allowNull: true, 
                validate: {}
        },
//        icon: {type: seq.STRING, allowNull: false, 
//               validate: {}
//        },
        members: {type: seq.INTEGER, allowNull: false, 
                 validate: {isInt: true}
        },
        reference: {type: seq.STRING, allowNull: false, 
                 validate: {isAlphanumeric: true}
        },
        active: {type: seq.BOOLEAN, allowNull: false, defaultValues: false, 
              validate: {isIn: [['0', '1']]}
        },
    },
    {
        createdAt:  seq.DATE,
        updatedAt:  seq.DATE,
    }
)


Group.belongsTo(User, {as: "Host"})


database.sync()
    .then(() => {
        console.log('Connected the Group model to database')
    })
    .catch((err) => {
        console.log('Issue connected the Group model to the database: ' + JSON.stringify(err))
    })


module.exports.Group = Group;