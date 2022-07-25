const mongoose = require('mongoose')

const Connect_db = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI)
		console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

module.exports = Connect_db