const asyncHandler = require('express-async-handler')
const Item = require('../models/item_model')

//  @desc     Create item
//  @route    POST /api/items/
//  @access   Private
const postItem = asyncHandler(async (req, res) => {
	if (!req.body) {
		res.status(400).json({
			head: 'Failed',
			type: 'Bad request',
			message: 'Please add a text field',
		})

		const item = await Item.create({
			name: req.body.name,
		})

		res.status(200).json(item)
	}

	res.status(200).json({
		head: 'Success',
		type: 'Post request',
	})
})

//  @desc     Read items
//  @route    GET /api/items
//  @access   Private
const getItems = asyncHandler(async (req, res) => {
	const items = await Item.find()

	res.status(200).json({
		head: 'Success',
		type: 'Get request',
		body: items,
	})
})

//  @desc     Update item
//  @route    PUT /api/items/:id
//  @access   Private
const putItem = asyncHandler(async (req, res) => {
	if (!req.body) {
		res.status(400).json({
			head: 'Failed',
			type: 'Bad request',
			message: 'Please add a text field and index',
		})
	}

	res.status(200).json({
		head: 'Success',
		type: 'Put request',
	})
})

//  @desc     Delete item
//  @route    DELETE /api/items/:id
//  @access   Private
const deleteItem = asyncHandler(async (req, res) => {
	if (!req.body) {
		res.status(400).json({
			head: 'Failed',
			type: 'Bad request',
			message: 'Please add an index',
		})
	}

	res.status(200).json({
		head: 'Success',
		type: 'Delete request',
	})
})

module.exports = {
	postItem,
	getItems,
	putItem,
	deleteItem,
}
