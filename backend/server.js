const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/error_middleware')
const connectdb = require('./config/db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)
connectdb()
app.use('/Data/Items', require('./routes/item_routes'))
app.listen(port, () => console.log(`server started on ${port}`))
