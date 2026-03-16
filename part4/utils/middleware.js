const logger = require('../utils/logger')

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  if (error.name === 'CastError') {
    return response.status(400).json({ error: 'malformatted id' })
  }

  next(error) // fallback to Express default handler
}

const unknownEndpoint = (request, response) => {
  response.status(404).json({ error: 'unknown endpoint' })
}

module.exports = { errorHandler, unknownEndpoint }
