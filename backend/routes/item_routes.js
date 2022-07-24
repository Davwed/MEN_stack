const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
	res.status(200).json({
		head: 'Success',
		type: 'Post request',
	})
})

router.get('/', (res) => {
	res.status(200).json({
		head: 'Success',
		type: 'Get request',
	})
})

router.put('/:id', (req, res) => {
	res.status(200).json({
		head: 'Success',
		type: 'Put request',
		message: `Updated item ${req.params.id}`,
	})
})

router.delete('/:id', (req, res) => {
	res.status(200).json({
		head: 'Success',
		type: 'Delete request',
		message: `Deleted item ${req.params.id}`,
	})
})

module.exports = router
