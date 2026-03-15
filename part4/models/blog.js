const mongoose = require('mongoose')
const config = require('../utils/config')
const logger = require('../utils/logger')

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = config.MONGODB_URL
mongoose
  .connect(mongoUrl, { family: 4 })
  .then(() => {
    logger.info('Connection to DB established')
  })
  .catch((error) => {
    logger.error('Error connecting to DB', error.message)
  })

module.exports = Blog
