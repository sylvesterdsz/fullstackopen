const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get("/api/persons", (request,response) => {
    response.json(persons)
})

app.get("/info", (request, response) => {
    const numberOfPersons = persons.length
    const requestReceivedTime = new Date()
    response.send(`
        <div>Phonebook has info for ${numberOfPersons} people</div>
        <div>${requestReceivedTime}</div>
    `)
})

app.get("/api/persons/:id", (request,response)=>{
    const id = request.params.id
    const person = persons.find(p => p.id ===id)
    if(!person) {
        response.statusMessage=`Person with id = ${id} was not found`
        response.status(404).end()
    }
    response.json(person)    
})

app.delete("/api/persons/:id", (request,response) => {
    const id = request.params.id
    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
})

app.post("/api/persons", (request,response) => {
    const {name, number} = request.body
    if(!name) {
        return response.status(400).json({
            error: "name missing"
        })
    } else if (!number) {
        return response.status(400).json({
            error: "number missing"
        })
    }

    //check if name already exists
    const nameExists = persons.some(p => p.name === name)

    if(nameExists) {
        return response.status(400).json({
            error: "name must be unique"
        })
    }

    const randomID = persons.length > 0
    ? Math.max(...persons.map(n => Number(n.id))) 
    : 0
    const person = {
        "id": String(randomID+1),
        "name": name,
        "number": number
    }
    persons = persons.concat(person)
    response.json(person)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log("Server is running and listening for requests")
})

