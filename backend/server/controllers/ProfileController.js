const { Profile } = require('../../database/models/Profile');


const controller = {
    get: (req, res) => {
        let user_id = req.params.id
        Profile.findOne({ where: {userId: user_id} })
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                console.log('Getting Profile by User Id error: ' + JSON.stringify(err))
            })    
    },
    post: (req, res) => {
        let data = req.body;
        Profile.create(data)
            .then((response) => {
                res.status(201).send('New Profile');
            })
            .catch((err) => {
                console.log("Creating a Profile error: " + JSON.stringify(err))
            })
    },
    patch: (req, res) => {
        let user_id = req.params.id
        Profile.findOne({ where: {userId: user_id} })
            .then((profile) => {
                profile.update(req.body)
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
        let user_id = req.params.id
        Profile.findOne({ where: {userId: user_id} })
            .then((profile) => {
                let deletedProfile = profile.dataValues;
                profile.destroy()
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