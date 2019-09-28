const { Expense } = require('../../database/models/Expense');


const controller = {
    get: (req, res) => {
        let id = req.params.id
        Expense.findByPk(id)
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                console.log('Getting Expense by Id error: ' + JSON.stringify(err))
            })    
    },
    post: (req, res) => {
        let data = req.body;
        Expense.create(data)
            .then((response) => {
                res.status(201).send('New Expense');
            })
            .catch((err) => {
                console.log("Creating an expense error: " + JSON.stringify(err))
            })
    },
    patch: (req, res) => {
        let id = req.params.id
        Expense.findByPk(id)
            .then((expense) => {
                expense.update(req.body)
                    .then((response) => {
                        res.status(202).send(response)
                    })
                    .catch((err) => {
                        console.log('updating expense by Id error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting expense by Id error: ' + JSON.stringify(err))
            })
    },
    delete: (req, res) => {
        let id = req.params.id
        Expense.findByPk(id)
            .then((expense) => {
                expense.destroy()
                    .then(() => {
                        res.status(204).send('Deleted Expense')
                    })
                    .catch((err) => {
                        console.log('Deleting Expense error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting expense by Id error: ' + JSON.stringify(err))
            })
    }
};


module.exports = controller;