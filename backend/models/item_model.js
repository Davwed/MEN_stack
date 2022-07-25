const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a text value'],
	},
})

module.exports = mongoose.model('Item', itemSchema)
