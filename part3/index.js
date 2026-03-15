const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./utils/config')
const logger = require('./utils/logger')
const personsRouter = require('./controller/persons')
const middleware = require('./utils/middleware')

const app = express()

app.use(express.json())
app.use(cors())

morgan.token('body', (req) => {
  return JSON.stringify(req.body)
})
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body'),
)

////ALl routes go here
app.use('/api/persons', personsRouter)

app.use(middleware.unknownEndpoint)
// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(middleware.errorHandler)

const PORT = config.PORT

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
