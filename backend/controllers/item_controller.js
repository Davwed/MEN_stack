const async_handler = require('express-async-handler')
const Item = require('../models/item_model')



//  @desc     Create item
//  @route    POST /api/items/
//  @access   Private
const Post_item = async_handler((req, res) => {
	if (!req.body) {
		res.status(400).json({
			head: 'Failed',
			type: 'Bad request',
			message: 'Please add a text field',
		})
	}

	res.status(200).json({
		head: 'Success',
		type: 'Post request',
	})
})

//  @desc     Read items
//  @route    GET /api/items
//  @access   Private
const Get_item = async_handler((req, res) => {
	const item = await Item.find()

	res.status(200).json({
		head: 'Success',
		type: 'Get request',
		body: item
	})
})

//  @desc     Update item
//  @route    PUT /api/items/:id
//  @access   Private
const Put_item = async_handler((req, res) => {
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
const Delete_item = async_handler((req, res) => {
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
	Post_item,
	Get_item,
	Put_item,
	Delete_item,
}
