const router = require('express').Router();
const userController = require('../controllers/UserController')


router.route('/user')
    .post(userController.post)


router.route('/user/:id')
    .get(userController.get)
    .patch(userController.patch)
    .delete(userController.delete)


module.exports = router;