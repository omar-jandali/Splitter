const { User } = require('../../database/models/User');


const controller = {
    get: (req, res) => {
        let user_id = req.params.id
        User.findByPk(user_id)
            .then((response) => {
                let data = response.dataValues
                res.status(200).send(data)
            })
            .catch((err) => {
                console.log('Getting user by Id error: ' + JSON.stringify(err))
            })    
    },
    post: (req, res) => {
        let data = req.body;
        User.create(data)
            .then((response) => {
                res.status(201).send('New User');
            })
            .catch((err) => {
                console.log("Creating a user error: " + JSON.stringify(err))
            })
    },
    patch: (req, res) => {
        let user_id = req.params.id
        User.findByPk(user_id)
            .then((user) => {
                user.update(req.body)
                    .then((response) => {
                        res.status(202).send(response.dataValues)
                    })
                    .catch((err) => {
                        console.log('updating user by Id error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting user by Id error: ' + JSON.stringify(err))
            })
    },
    delete: (req, res) => {
        let user_id = req.params.id
        User.findByPk(user_id)
            .then((user) => {
                let deletedUser = user.dataValues;
                user.destroy()
                    .then(() => {
                        res.status(204)
                    })
                    .catch((err) => {
                        console.log('Deleting user error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting user by Id error: ' + JSON.stringify(err))
            })
    }
};


module.exports = controller;