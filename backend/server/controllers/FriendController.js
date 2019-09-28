const { Friend } = require('../../database/models/Friend');
const seq = require('sequelize');
const Op = seq.Op;


const controller = {
    post: (req, res) => {
        let data = req.body;
        Friend.create(data)
            .then((response) => {
                res.status(201).send('New Friend');
            })
            .catch((err) => {
                console.log("Creating a Friend error: " + JSON.stringify(err))
            })
    },
    getByIds: (req, res) => {
        let friender_id = req.params.frienderId;
        let friended_id = req.params.friendedId;
        Friend.findOne({ where: {frienderId: friender_id, friendedId: friended_id}})
            .then((response) => {
                res.status(200).send(response);
            })
            .catch((err) => {
                console.log("Getting friend relation with Id\'s error: " + JSON.stringify(err))
            })
    },
    getByUser: (req, res) => {
        let data = [];
        let user_id = req.params.userId;
        Friend.findAll({ where: { [Op.or]: [{ frienderId: user_id} , { friendedId: user_id }] } })
            .then((response) => {
                console.log(JSON.stringify(response))
                res.status(200).send(response)
            })
            .catch()
    },
    patch: (req, res) => {
        let friender_id = req.params.frienderId;
        let friended_id = req.params.friendedId;
        Friend.findOne({ where: { frienderId: friender_id, friendedId: friended_id } })
            .then((friend) => {
                friend.update(req.body)
                    .then((response) => {
                        res.status(202).send(response)
                    })
                    .catch((err) => {
                        console.log('updating profile by user Id error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting profile by user Id error: ' + JSON.stringify(err))
            })
    },
    delete: (req, res) => { 
        let friender_id = req.params.frienderId;
        let friended_id = req.params.friendedId;
        Friend.findOne({ where: { frienderId: friender_id, friendedId: friended_id } })
            .then((friend) => {
                let deletedProfile = friend.dataValues;
                friend.destroy()
                    .then(() => {
                        res.status(204).send('Deleted Profile');
                    })
                    .catch((err) => {
                        console.log('Deleting profile error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting profile by user Id error: ' + JSON.stringify(err))
            })
    }
};


module.exports = controller;