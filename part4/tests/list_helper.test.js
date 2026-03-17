const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns 1', () => {
  const blogs = []
  const dummyValue = listHelper.dummy(blogs)
  assert.strictEqual(dummyValue, 1)
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    const blogs = []
    const totalLikes = listHelper.totalLikes(blogs)
    assert.strictEqual(totalLikes, 0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const blogs = [
      {
        title: 'Book title',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 5,
      },
    ]
    const totalLikes = listHelper.totalLikes(blogs)
    assert.strictEqual(totalLikes, 5)
  })

  test('of a bigger list is calculated right', () => {
    const blogs = [
      {
        title: 'Book title 1',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 5,
      },
      {
        title: 'Book title 2',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 6,
      },
      {
        title: 'Book title 3',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 2,
      },
      {
        title: 'Book title 4',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 1,
      },
    ]
    const totalLikes = listHelper.totalLikes(blogs)
    assert.strictEqual(totalLikes, 14)
  })
})
