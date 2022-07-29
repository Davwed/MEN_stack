const asyncHandler = require('express-async-handler')
const Item = require('../models/item_model')

//  @desc     Create item
//  @route    POST /api/items/
//  @access   Private
const postItem = asyncHandler(async (req, res) => {
	if (!req.body) {
		res.status(400)
		throw new Error('Bad request')
	}

	const item = await Item.create({ text: req.body.text })

	res.status(200).json({
		head: 'Success',
		body: item,
		user: req.user.id,
	})
})

//  @desc     Read items
//  @route    GET /api/items
//  @access   Private
const getItems = asyncHandler(async (req, res) => {
	if (!items) {
		res.status(400)
		throw new Error('Bad request')
	}

	const items = await Item.find({ user: req.user.id })

	res.status(200).json({
		state: 'Success',
		body: items,
	})
})

//  @desc     Update item
//  @route    PUT /api/items/:id
//  @access   Private
const putItem = asyncHandler(async (req, res) => {
	const item = await Item.findById(req.params.id)

	if (!item) {
		res.status(400)
		throw new Error('Item not found')
	}

	const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})

	res.status(200).json({
		head: 'Success',
		body: updatedItem,
	})
})

//  @desc     Delete item
//  @route    DELETE /api/items/:id
//  @access   Private
const deleteItem = asyncHandler(async (req, res) => {
	const removedItem = await Item.findByIdAndRemove(req.params.id)

	if (!req.body) {
		res.status(400)
		throw new Error('Bad request')
	}

	res.status(200).json({
		head: 'Success',
		body: removedItem,
	})
})

module.exports = {
	postItem,
	getItems,
	putItem,
	deleteItem,
}
