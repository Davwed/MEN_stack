const express = require('express')
const router = express.Router()
const {
	postItem,
	deleteItem,
	putItem,
	getItems,
} = require('../controllers/item_controller')
const { protect } = require('../middleware/auth_middleware')

router.route('/').get(protect, getItems).post(protect, postItem)

router.route('/:id').put(protect, putItem).delete(protect, deleteItem)

module.exports = router
