const seq = require('sequelize');
const { database } = require('../index');
const { User } = require('./User');
const { Group } = require('./Group');
const { Expense } = require('./Expense');
const { Member } = require('./Member');


const Activity = database.define(
    "activity",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoIncrement: true},
        description: {type: seq.TEXT, allowNull: true, 
                validate: {}
        },
        amount: {type: seq.FLOAT(5, 2), allowNull: true, defaultValues: '0.00', 
                validate: {isFloat: true}
        },
        seen: {type: seq.BOOLEAN, allowNull: false, defaultValues: false, 
              validate: {isIn: [['0', '1']]}
        },
        verified: {type: seq.BOOLEAN, allowNull: false, defaultValues: false, 
              validate: {isIn: [['0', '1']]}
        },
    },
    {
        createdAt:  seq.DATE,
        updatedAt:  seq.DATE,
    }
)


Activity.belongsTo(User);
Activity.belongsTo(Group);
Activity.belongsTo(Expense);
Activity.belongsTo(Member);


database.sync()
    .then(() => {
        console.log('Connected the Activity model to database')
    })
    .catch((err) => {
        console.log('Issue connected the Activity model to the database: ' + JSON.stringify(err))
    })


module.exports.Activity = Activity;