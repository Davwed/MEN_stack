const express = require('express')
const router = express.Router()

const {
	postItem,
	deleteItem,
	putItem,
	getItems,
} = require('../controllers/item_controller')

router.route('/').get(getItems).post(postItem)

router.route('/:id').put(putItem).delete(deleteItem)

module.exports = router
