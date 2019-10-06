const { Activity } = require('../../database/models/Activity');


const controller = {
    get: (req, res) => {
         let id = req.params.id
        Activity.findByPk(id)
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                console.log('Getting Activity by Id error: ' + JSON.stringify(err))
            })
    },
    post: (req, res) => {
        let data = req.body;
        Activity.create(data)
            .then((response) => {
                res.status(201).send('New Activity');
            })
            .catch((err) => {
                console.log("Creating an activity error: " + JSON.stringify(err))
            })
    },
    patch: (req, res) => {
        let id = req.params.id
        Activity.findByPk(id)
            .then((activity) => {
                activity.update(req.body)
                    .then((response) => {
                        res.status(202).send(response)
                    })
                    .catch((err) => {
                        console.log('updating activity by Id error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting activity by Id error: ' + JSON.stringify(err))
            })
    },
    delete: (req, res) => {
        let id = req.params.id
        Activity.findByPk(id)
            .then((activity) => {
                activity.destroy()
                    .then(() => {
                        res.status(204)
                    })
                    .catch((err) => {
                        console.log('Deleting activity error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting activity by Id error: ' + JSON.stringify(err))
            })
    }
};


module.exports = controller;
