const seq = require('sequelize');
const { database } = require('../index');
const { User } = require('./User');
const { Account } = require('./Account');


const Transaction = database.define(
    "transaction",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoIncrement: true},
        amount: {type: seq.FLOAT(9, 2), allowNull: true, defaultValues: '0.00', 
                validate: {isFloat: true}
        },
        description: {type: seq.TEXT, allowNull: true, 
                validate: {}
        },
    },
    {
        createdAt:  seq.DATE,
        updatedAt:  seq.DATE,
    }
)


Transaction.belongsTo(User, {as: "user_from"});
Transaction.belongsTo(User, {as: "user_to"});
Transaction.belongsTo(Account, {as: "acct_from"});
Transaction.belongsTo(Account, {as: "acct_to"});


database.sync()
    .then(() => {
        console.log('Connected the Transaction model to database')
    })
    .catch((err) => {
        console.log('Issue connected the Transaction model to the database: ' + JSON.stringify(err))
    })


module.exports.Transaction = Transaction;