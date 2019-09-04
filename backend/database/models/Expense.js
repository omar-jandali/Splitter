const seq = require('sequelize');
const { database } = require('../index');
const { User } = require('./User');
const { Group } = require('./Group');


const Expense = database.define(
    "expense",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoIncrement: true},
        location: {type: seq.STRING, allowNull: false, 
                   validate: {}
        },
        split: {type: seq.STRING, allowNull: false, defaultValues: 'Even',
                validate: {isIn: [['Even', 'Individual']]}
        },
        amount: {type: seq.FLOAT(5, 2), allowNull: true, defaultValues: '0.00', 
                validate: {isFloat: true}
        },
        tax: {type: seq.FLOAT(5, 2), allowNull: true, defaultValues: '0.00', 
                validate: {isFloat: true}
        },
        tip: {type: seq.FLOAT(5, 2), allowNull: true, defaultValues: '0.00', 
                validate: {isFloat: true}
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


Expense.belongsTo(User);
Expense.belongsTo(Group);


database.sync()
    .then(() => {
        console.log('Connected the Expense model to database')
    })
    .catch((err) => {
        console.log('Issue connected the Expense model to the database: ' + JSON.stringify(err))
    })


module.exports.Expense = Expense;