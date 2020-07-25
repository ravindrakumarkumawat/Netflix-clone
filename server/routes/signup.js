const express = require('express')
const router = express.Router()

const signup = require('../controllers/signup')

router.get('/', signup.get_users)
router.post('/', signup.add_user)
// router.put('/:id', lists.update_list)
// router.delete('/:id', lists.delete_list)

module.exports = router