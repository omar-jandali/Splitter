const seq = require('sequelize');
const { database } = require('../index');
const { User } = require('./User')


const Account = database.define(
    "account",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: seq.STRING, allowNull: false,
               validate: {}
        },
        bank: {type: seq.STRING, allowNull: false,
               validate: {}
        },
        acct_type: {type: seq.STRING, allowNull: false, defaultValues: 'Checking',
                     validate: {isIn: [['Checking', 'Savings', 'Credit']]}
        },
        balance: {type: seq.FLOAT(9, 2), allowNull: true, defaultValues: '0.00',
                validate: {isFloat: true}
        },
        primary: {type: seq.BOOLEAN, allowNull: false, defaultValues: false,
              validate: {isIn: [['true', 'false']]}
        },
        acct_id: {type: seq.STRING, allowNull: false,
                     validate: {}
        },
        // last_activity: {type: seq.STRING, allowNull: true,
        //              validate: {}
        // },
    },
    {
        createdAt:  seq.DATE,
        updatedAt:  seq.DATE,
    }
)

// CHECK AND FIGURE OUT WHAT TO DO WITH LAST ACTIVITY --
//    potentially set an id for the last database item associated with
//    the selected account

Account.belongsTo(User)


database.sync()
    .then(() => {
        console.log('Connected the Account model to database')
    })
    .catch((err) => {
        console.log('Issue connected the Account model to the database: ' + JSON.stringify(err))
    })


module.exports.Account = Account;
