const express = require('express')
const blogsRouter = require('./controller/blogs')
const config = require('./utils/config')

const app = express()
app.use(express.json())

//all calls
app.use('/api/blogs', blogsRouter)

const PORT = config.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
