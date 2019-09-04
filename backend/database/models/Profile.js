const seq = require('sequelize');
const { database } = require('../index');
const { User } = require('./User');


const stateCodes = [[
 'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
 'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
 'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
 'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
 'VT','VI','VA','WA','WV','WI','WY'
]]


const Profile = database.define(
    "profile",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoIncrement: true},
        bio: {type: seq.TEXT, allowNull: true, 
             validate: {}
        },
        gender: {type: seq.STRING, allowNull: true, defaultValue: "None", 
                validate: {isIn: [['M', 'F', 'O', 'None']]}
        },
        phone: {type: seq.STRING, allowNull: false, 
               validate: {}
        },
        street: {type: seq.STRING, allowNull: false, 
                 validate: {isAlphanumeric: true}
        },
        city: {type: seq.STRING, allowNull: false, 
                 validate: {isAlpha: true}
        },
        state: {type: seq.STRING, allowNull: false, 
                validate: {isIn: stateCodes, isAlpha: true}
        },
        country: {type: seq.STRING, allowNull: false, 
                 validate: {isIn:[['United States of America']], isAlpha: true}
        },
        zip: {type: seq.INTEGER, allowNull: false, 
              validate: {isNumeric: true, len: [5, 9]}
        },
        twitter: {type: seq.STRING, allowNull: true, 
                  validate: {isUrl: true}
        },
        linkedin: {type: seq.STRING, allowNull: true, 
                  validate: {isUrl: true}
        },
    },
    {
        createdAt:  seq.DATE,
        updatedAt:  seq.DATE,
    }
)


Profile.belongsTo(User)


database.sync()
    .then(() => {
        console.log('Connected the Profile model to database')
    })
    .catch((err) => {
        console.log('Issue connected the Profile model to the database: ' + JSON.stringify(err))
    })


module.exports.Profile = Profile;