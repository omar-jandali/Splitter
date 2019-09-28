const { Item } = require('../../database/models/Item');


const controller = {
    get: (req, res) => {
         let id = req.params.id
        Item.findByPk(id)
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                console.log('Getting Expense by Id error: ' + JSON.stringify(err))
            })
    },
    post: (req, res) => {
        let data = req.body;
        Item.create(data)
            .then((response) => {
                res.status(201).send('New Item');
            })
            .catch((err) => {
                console.log("Creating an item error: " + JSON.stringify(err))
            })
    },
    patch: (req, res) => {
        let id = req.params.id
        Item.findByPk(id)
            .then((item) => {
                item.update(req.body)
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
        Item.findByPk(id)
            .then((expense) => {
                item.destroy()
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
