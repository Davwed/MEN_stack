const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const { Error_handler } = require('./middleware/error_middleware')
const connect_db = require('./config/db')

connect_db()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(Error_handler)

app.use('/api/items', require('./routes/item_routes'))
app.listen(port, () => console.log(`server started on ${port}`))
