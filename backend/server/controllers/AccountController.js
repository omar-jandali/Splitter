const { Account } = require('../../database/models/Account');


const controller = {
    get: (req, res) => {
         let id = req.params.id
        Account.findByPk(id)
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                console.log('Getting Account by Id error: ' + JSON.stringify(err))
            })
    },
    post: (req, res) => {
        let data = req.body;
        Account.create(data)
            .then((response) => {
                res.status(201).send('New Item');
            })
            .catch((err) => {
                console.log("Creating an account error: " + JSON.stringify(err))
            })
    },
    patch: (req, res) => {
        let id = req.params.id
        Account.findByPk(id)
            .then((account) => {
                account.update(req.body)
                    .then((response) => {
                        res.status(202).send(response)
                    })
                    .catch((err) => {
                        console.log('updating account by Id error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting account by Id error: ' + JSON.stringify(err))
            })
    },
    delete: (req, res) => {
        let id = req.params.id
        Account.findByPk(id)
            .then((account) => {
                account.destroy()
                    .then(() => {
                        res.status(204)
                    })
                    .catch((err) => {
                        console.log('Deleting account error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting account by Id error: ' + JSON.stringify(err))
            })
    }
};


module.exports = controller;
