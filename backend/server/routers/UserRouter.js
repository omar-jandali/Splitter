const router = require('express').Router();
const userController = require('../controllers/UserController');
const profileController = require('../controllers/ProfileController')
const friendController = require('../controllers/FriendController')
const groupController = require('../controllers/GroupController')
const memberController = require('../controllers/MemberController')
const expenseController = require('../controllers/ExpenseController')
const itemController = require('../controllers/ItemController')
const accountController = require('../controllers/AccountCOntroller')
const transactionController = require('../controllers/TransactionController')
const activityController = require('../controllers/ActivityController')


router.route('/user')
    .post(userController.post)

router.route('/user/:id')
    .get(userController.get)
    .patch(userController.patch)
    .delete(userController.delete)


router.route('/profile')
    .post(profileController.post)


router.route('/profile/:id')
    .get(profileController.get)
    .patch(profileController.patch)
    .delete(profileController.delete)


router.route('/friend')
    .post(friendController.post)

router.route('/friend/:userId')
    .get(friendController.getByUser)

router.route('/friend/:frienderId/:friendedId')
    .get(friendController.getByIds)
    .patch(friendController.patch)
    .delete(friendController.delete)

router.route('/group')
    .post(groupController.post)

router.route('/group/:id')
    .get(groupController.get)
    .patch(groupController.patch)
    .delete(groupController.delete)

router.route('/member')
    .post(memberController.post)

// work on fixing the issues
router.route('/user_member/:userId')
    .get(memberController.getUserMember)

router.route('/member/:id')
    .get(memberController.get)
    .patch(memberController.patch)
    .delete(memberController.delete)

router.route('/expense')
    .post(expenseController.post)

router.route('/expense/:id')
    .get(expenseController.get)
    .patch(expenseController.patch)
    .delete(expenseController.delete)

router.route('/item')
  .post(itemController.post)

router.route('/item/:id')
  .get(itemController.get)
  .patch(itemController.patch)
  .delete(itemController.delete)

router.route('/account')
  .post(accountController.post)

router.route('/account/:id')
  .get(accountController.get)
  .patch(accountController.patch)
  .delete(accountController.delete)

router.route('/transaction')
  .post(transactionController.post)

router.route('/transaction/:id')
  .get(transactionController.get)
  .patch(transactionController.patch)
  .delete(transactionController.delete)

router.route('/activity')
  .post(activityController.post)

router.route('/activity/:id')
  .get(activityController.get)
  .patch(activityController.patch)
  .delete(activityController.delete)


module.exports = router;
