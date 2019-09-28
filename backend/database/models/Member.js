const seq = require('sequelize');
const { database } = require('../index');
const { User } = require('./User')
const { Group } = require('./Group')


const Member = database.define(
    "member",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoIncrement: true},
        balance: {type: seq.FLOAT(9, 2), allowNull: true, defaultValues: '0.00', 
                validate: {isFloat: true}
        },
        open_tabs: {type: seq.INTEGER, allowNull: false, defaultValues: '0', 
                 validate: {isInt: true}
        },
        reference: {type: seq.STRING, allowNull: false, 
                 validate: {isAlphanumeric: true}
        },
        admin: {type: seq.BOOLEAN, allowNull: false, defaultValues: false, 
              validate: {isIn: [['true', 'false']]}
        },
        active: {type: seq.BOOLEAN, allowNull: false, defaultValues: false, 
              validate: {isIn: [['true', 'false']]}
        },
    },
    {
        createdAt:  seq.DATE,
        updatedAt:  seq.DATE,
    }
)


Member.belongsTo(Group)
Member.belongsTo(User)


database.sync()
    .then(() => {
        console.log('Connected the Member model to database')
    })
    .catch((err) => {
        console.log('Issue connected the Member model to the database: ' + JSON.stringify(err))
    })


module.exports.Member = Member;