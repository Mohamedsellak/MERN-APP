const express = require('express')
const router = express.Router()
const { getUsers, addUser, updateUser, deleteUser } = require('../controllers/userController')


router.route('/').get(getUsers).post(addUser).put(updateUser)
router.route('/:id').delete(deleteUser)

// or 

// router.get('/',getUsers)

// router.post('/',addUser)

// router.put('/',updateUser)

// router.delete('/:id',deleteUser)

module.exports = router