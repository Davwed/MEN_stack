const Error_handler = (err, req, res, next) => {
	const status_code = res.status_code ? res.status_code : 500
	res.status(status_code)
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	})
}

module.exports = {
	Error_handler,
}
