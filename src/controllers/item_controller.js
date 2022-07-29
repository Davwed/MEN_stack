const asyncHandler = require('express-async-handler')
const Item = require('../models/item_model')
const User = require('../models/user_model')

//  @desc     Create item
//  @route    POST /api/items/
//  @access   Private
const postItem = asyncHandler(async (req, res) => {
	if (!req.body) {
		res.status(400)
		throw new Error('Bad request')
	}

	const item = await Item.create({
		user: req.user.id,
		text: req.body.text,
	})

	res.status(200).json({
		head: 'Success',
		body: item,
	})
})

//  @desc     Read items
//  @route    GET /api/items
//  @access   Private
const getItems = asyncHandler(async (req, res) => {
	const items = await Item.find({ user: req.user.id })

	if (!items) {
		res.status(400)
		throw new Error('Bad request')
	}

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

	const user = await User.findById(req.user.id)

	// Check for user
	if (!user) {
		res.status(401)
		throw new Error('User not found')
	}

	// Make sure the logged in user matches the item user
	if (item.user.toString() !== user.id) {
		res.status(401)
		throw new Error('User not authorized')
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
	const item = await Item.findById(req.params.id)

	if (!req.body) {
		res.status(400)
		throw new Error('Bad request')
	}

	const user = await User.findById(req.user.id)

	// Check for user
	if (!user) {
		res.status(401)
		throw new Error('User not found')
	}

	// Make sure the logged in user matches the item user
	if (item.user.toString() !== user.id) {
		res.status(401)
		throw new Error('User not authorized')
	}

	const removedItem = await Item.findByIdAndRemove(req.params.id)

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
