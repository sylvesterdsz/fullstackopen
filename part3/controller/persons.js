const personsRouter = require('express').Router()
const Person = require('../models/person')

personsRouter.get('/', (request, response) => {
  Person.find({}).then((person) => {
    response.json(person)
  })
})

personsRouter.get('/info', (request, response, next) => {
  Person.find({})
    .then((person) => {
      const numberOfPersons = person.length
      const requestReceivedTime = new Date()
      response.send(`
        <div>Phonebook has info for ${numberOfPersons} people</div>
        <div>${requestReceivedTime}</div>
    `)
    })
    .catch((error) => next(error))
})

personsRouter.get('/:id', (request, response, next) => {
  const id = request.params.id
  Person.findById(id)
    .then((person) => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

personsRouter.delete('/:id', (request, response, next) => {
  const id = request.params.id
  //persons = persons.filter((p) => p.id !== id);
  Person.findByIdAndDelete(id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

//post with validation
personsRouter.post('/', (request, response, next) => {
  const { name, number } = request.body
  if (!name) {
    return response.status(400).json({
      error: 'name missing',
    })
  } else if (!number) {
    return response.status(400).json({
      error: 'number missing',
    })
  }
  const person = new Person({
    name: name,
    number: number,
  })
  person
    .save()
    .then((savedPerson) => {
      response.json(savedPerson)
    })
    .catch((error) => next(error))
})

personsRouter.put('/:id', (request, response, next) => {
  const id = request.params.id
  const { name, number } = request.body

  if (!name || !number) {
    return response.status(400).json({
      error: 'name or number missing',
    })
  }

  Person.findById(id)
    .then((person) => {
      if (!person) {
        return response.status(404).end()
      }

      person.name = name
      person.number = number

      return person.save().then((updatedPerson) => {
        response.json(updatedPerson)
      })
    })
    .catch((error) => next(error))
})

module.exports = personsRouter
