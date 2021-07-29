// import config from './../config/config'
// import app from './express'
// import mongoose from 'mongoose'
// import bidding from './controllers/bidding.controller'

// const config = require('./../config/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const crypto = require('crypto')
const User = require('./models/user.model')
// const userRoutes = require('./routes/user.routes')
const router = express.Router()
router.route('/api/users',async (req, res) => {
    try {
      let users = await User.find().select('name email updated created')
      res.json(users)
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
//   .get(userCtrl.list)
//   .post(userCtrl.create)
// import userRoutes from './routes/user.routes'
// app.use('/', userRoutes)
// const bidding = require( './controllers/bidding.controller')
mongoUri = "mongodb+srv://PR-Test:poorna9666@test.cpqoh.mongodb.net/testAuctions?retryWrites=true&w=majority"
port = 7000
// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

 server = app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

module.exports = app
// bidding(server)
