const express = require('express')
const router = express.Router()

const registerController = require('../controllers/register')

router.get('/', registerController.get_users)
router.post('/', registerController.add_user)
// router.put('/:id', lists.update_list)
// router.delete('/:id', lists.delete_list)

module.exports = router