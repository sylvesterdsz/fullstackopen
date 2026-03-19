const { test, after } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')

const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
  { title: 'First blog', author: 'Alice', url: 'url1', likes: 5 },
  { title: 'Second blog', author: 'Bob', url: 'url2', likes: 10 },
]

test('blogs are returned as json and correct amount', async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(initialBlogs)

  const response = await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  assert.strictEqual(response.body.length, initialBlogs.length)
})

after(async () => {
  await mongoose.connection.close()
})

test('a specific note is within the returned notes', async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(initialBlogs)
  const response = await api.get('/api/blogs')

  const contents = response.body.map((e) => e.title)
  assert.strictEqual(contents.includes('First blog'), true)
})

after(async () => {
  await mongoose.connection.close()
})
