const express = require('express')
const router = express.Router()

const {
	Post_item,
	Get_item,
	Delete_item,
	Put_item,
} = require('../controllers/item_controller')

router.route('/').get(Get_item).post(Post_item)

router.route('/:id').put(Put_item).delete(Delete_item)

module.exports = router
