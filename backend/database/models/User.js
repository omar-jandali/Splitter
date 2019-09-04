const seq = require('sequelize');
const { database } = require('../index');


const permissions = [['Admin', 'Staff', 'User']];


const User = database.define(
    "user",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoIncrement: true},
        username: {type: seq.STRING, unique: true, allowNull: false, 
                   validate: {isAlphanumeric: true, len:  [8,16]}
        },
        password: {type: seq.STRING, allowNull: false,
                   validate: {}          
        },
        email: {type: seq.STRING, unique: true, allowNull: false, 
                validate: {isEmail: true}
        },
        first_name: {type: seq.STRING, allowNull: false,
                    validate: {isAlpha: true}
        },
        middle_name: {type: seq.STRING, allowNull: true,
                    validate: {isAlpha: true}
        },
        last_name: {type: seq.STRING, allowNull: true,
                    validate: {isAlpha: true,}
        },
        permission: {type: seq.STRING, allowNull: true, 
                     validate: {isAlpha: true, isIn: permissions}
        },
        synapse_id: {type: seq.STRING, allowNull: false, 
                     validate: {}}
    },
    {
        createdAt:  seq.DATE,
        updatedAt:  seq.DATE,
    }
)


database.sync()
    .then(() => {
        console.log('Connected the User model to database')
    })
    .catch((err) => {
        console.log('Issue connected the User model to the database: ' + JSON.stringify(err))
    })


module.exports.User = User;