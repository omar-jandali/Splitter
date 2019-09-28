const { Member } = require('../../database/models/Member');
const { Group } = require('../../database/models/Group');


const controller = {
    get: (req, res) => {
        let id = req.params.id
        Member.findByPk(id)
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                console.log('Getting member by Id error: ' + JSON.stringify(err))
            })    
    },
    getUserMember: (req, res) => {
        let groups = [];
        let user_id = req.params.userId
        Member.findAll({ where: { userId: user_id } })
            .then((response) => {
                for(let i = 0; i < response.length; i++){
                    Group.findByPk(response[i]['groupId'])
                        .then((group) => {
                            console.log(JSON.stringify(group))
                            groups.push(JSON.stringify(group))
                        })
                        .catch((err) => {
                            console.log('Getting Group by Id error: ' + JSON.stringify(err))
                        })
                }
                res.status(200).send(data)
            })
            .catch((err) => {
                console.log('Getting member by Id error: ' + JSON.stringify(err))
            })    
    },
    post: (req, res) => {
        let data = req.body;
        Member.create(data)
            .then((response) => {
                res.status(201).send('New Member');
            })
            .catch((err) => {
                console.log("Creating a member error: " + JSON.stringify(err))
            })
    },
    patch: (req, res) => {
        let id = req.params.id
        Member.findByPk(id)
            .then((member) => {
                member.update(req.body)
                    .then((response) => {
                        res.status(202).send(response)
                    })
                    .catch((err) => {
                        console.log('updating member by Id error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting user by Id error: ' + JSON.stringify(err))
            })
    },
    delete: (req, res) => {
        let id = req.params.id
        Member.findByPk(id)
            .then((member) => {
                let deletedUser = member.dataValues;
                member.destroy()
                    .then(() => {
                        res.status(204).send('Deleted Member')
                    })
                    .catch((err) => {
                        console.log('Deleting member error: ' + JSON.stringify(err))
                    })
            })
            .catch((err) => {
                console.log('Getting member by Id error: ' + JSON.stringify(err))
            })
    }
};


module.exports = controller;