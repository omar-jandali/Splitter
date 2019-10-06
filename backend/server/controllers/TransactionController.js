const { Transaction } = require('../../database/models/Transaction');


const controller = {
    get: (req, res) => {
         let id = req.params.id
        Transaction.findByPk(id)
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                console.log('Getting Transaction by Id error: ' + JSON.stringify(err))
            })
    },
    post: (req, res) => {
        let data = req.body;
        Transaction.create(data)
            .then((response) => {
                res.status(201).send('New Transaction');
            })
            .catch((err) => {
                console.log("Creating an transaction error: " + JSON.stringify(err))
            })
    },
    patch: (req, res) => {
        let id = req.params.id
        Transaction.findByPk(id)
            .then((transaction) => {
                transaction.update(req.body)
                    .then((response) => {
                        res.status(202).send(response)
                    })
                    .catch((err) => {
                        console.log('updating transaction by Id error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting transaction by Id error: ' + JSON.stringify(err))
            })
    },
    delete: (req, res) => {
        let id = req.params.id
        Transaction.findByPk(id)
            .then((transaction) => {
                transaction.destroy()
                    .then(() => {
                        res.status(204)
                    })
                    .catch((err) => {
                        console.log('Deleting transaction error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting transaction by Id error: ' + JSON.stringify(err))
            })
    }
};


module.exports = controller;
