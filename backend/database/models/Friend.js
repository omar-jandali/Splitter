const seq = require('sequelize');
const { database } = require('../index');
const { User } = require('./User');


const Friend = database.define(
    "friend",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoIncrement: true},
        status: {type: seq.STRING, allowNull: false, 
                 validate: {isIn:[['Pending', 'Accepted']], isAlpha: true}
        },
        favorite: {type: seq.BOOLEAN, allowNull: false, defaultValues: false, 
              validate: {isIn: [['true', 'false']]}
        },
    },
    {
        createdAt:  seq.DATE,
        updatedAt:  seq.DATE,
    }
)


Friend.belongsTo(User, {as: 'friender'})
Friend.belongsTo(User, {as: 'friended'})


database.sync()
    .then(() => {
        console.log('Connected the Friend model to database')
    })
    .catch((err) => {
        console.log('Issue connected the Friend model to the database: ' + JSON.stringify(err))
    })


module.exports.Friend = Friend;