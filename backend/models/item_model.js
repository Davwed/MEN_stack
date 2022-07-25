const mongoose = require('mongoose')

const item_schema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a text value'],
	},
})

module.exports = mongoose.model('Item', item_schema)
