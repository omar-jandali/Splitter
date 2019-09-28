const { Group } = require('../../database/models/Group');


const controller = {
    get: (req, res) => {
        let user_id = req.params.id
        Group.findByPk(user_id)
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                console.log('Getting user by Id error: ' + JSON.stringify(err))
            })    
    },
    post: (req, res) => {
        let data = req.body;
        Group.create(data)
            .then((response) => {
                res.status(201).send('New Group');
            })
            .catch((err) => {
                console.log("Creating a group error: " + JSON.stringify(err))
            })
    },
    patch: (req, res) => {
        let group_id = req.params.id
        Group.findByPk(group_id)
            .then((group) => {
                group.update(req.body)
                    .then((response) => {
                        res.status(202).send(response)
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
        let group_id = req.params.id
        Group.findByPk(group_id)
            .then((group) => {
                let deletedUser = group.dataValues;
                group.destroy()
                    .then(() => {
                        res.status(204).send('Deleted Group')
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