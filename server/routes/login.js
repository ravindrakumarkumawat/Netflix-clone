const express = require('express')
const router = express.Router()

const loginController = require('../controllers/login')

router.post('/', loginController.login)
// router.get('/', register.get_users)
// router.post('/', register.add_user)
// router.put('/:id', lists.update_list)
// router.delete('/:id', lists.delete_list)

module.exports = router