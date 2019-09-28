const seq = require('sequelize');
const { database } = require('../index');
const { User } = require('./User');
const { Group } = require('./Group');
const { Expense } = require('./Expense')


const Item = database.define(
    "item",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoIncrement: true},
        location: {type: seq.STRING, allowNull: false,
                   validate: {}
        },
        description: {type: seq.TEXT, allowNull: true,
                validate: {}
        },
        amount: {type: seq.FLOAT(9, 2), allowNull: true, defaultValues: '0.00',
                validate: {isFloat: true}
        },
        verified: {type: seq.BOOLEAN, allowNull: false, defaultValues: false,
              validate: {isIn: [['true', 'false']]}
        },
        paid: {type: seq.BOOLEAN, allowNull: false, defaultValues: false,
              validate: {isIn: [['true', 'false']]}
        },
        reference: {type: seq.STRING, allowNull: false,
                 validate: {isAlphanumeric: true}
        },
    },
    {
        createdAt:  seq.DATE,
        updatedAt:  seq.DATE,
    }
)


Item.belongsTo(User, {as: 'requester'});
Item.belongsTo(User, {as: 'requested'});
Item.belongsTo(Group)
Item.belongsTo(Expense)


database.sync()
    .then(() => {
        console.log('Connected the Item model to database')
    })
    .catch((err) => {
        console.log('Issue connected the Item model to the database: ' + JSON.stringify(err))
    })


module.exports.Item = Item;
