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

describe('favorite blog', () => {
  test('returns null for an empty list', () => {
    const blogs = []
    assert.deepStrictEqual(listHelper.favoriteBlog(blogs), null)
  })
  test('returns only one blog if the list has only one item', () => {
    const blogs = [
      {
        title: 'Book title',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 5,
      },
    ]
    const favoriteBlog = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(blogs[0], favoriteBlog)
  })
  test('returns the blog with the most likes', () => {
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
    const favoriteBlog = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(favoriteBlog, blogs[1])
  })
  test('handles multiple blogs with most likes', () => {
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
        likes: 6,
      },
      {
        title: 'Book title 4',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 1,
      },
    ]
    const favoriteBlog = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(favoriteBlog, blogs[1])
  })
})

describe('most blogs', () => {
  test('if returned null when blog list is empty', () => {
    const blogs = []
    assert.strictEqual(listHelper.mostBlogs(blogs), null)
  })

  test('returns author with 1 blog when list has 1 blog', () => {
    const blogs = [
      {
        title: 'Book title 2',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 6,
      },
    ]
    const mostBlogs = listHelper.mostBlogs(blogs)
    assert.deepStrictEqual(mostBlogs, { author: 'Sylvester Dsouza', blogs: 1 })
  })

  test('returns author with the most blogs ', () => {
    const blogs = [
      {
        title: 'Book title 1',
        author: 'Vinita Dsouza',
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
        author: 'Noah Dsouza',
        url: 'http://localhost',
        likes: 1,
      },
      {
        title: 'Book title 5',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 2,
      },
    ]
    const mostBlogs = listHelper.mostBlogs(blogs)
    assert.deepStrictEqual(mostBlogs, { author: 'Sylvester Dsouza', blogs: 3 })
  })

  test('returns one of the authors with highest blog count when tied', () => {
    const blogs = [
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
        author: 'Noah Dsouza',
        url: 'http://localhost',
        likes: 1,
      },
      {
        title: 'Book title 5',
        author: 'Noah Dsouza',
        url: 'http://localhost',
        likes: 2,
      },
    ]
    const mostBlogs = listHelper.mostBlogs(blogs)

    assert.strictEqual(mostBlogs.blogs, 2)
    assert.ok(['Sylvester Dsouza', 'Noah Dsouza'].includes(mostBlogs.author))
  })
})

describe('most likes', () => {
  test('if returned null when blog list is empty', () => {
    const blogs = []
    assert.strictEqual(listHelper.mostLikes(blogs), null)
  })

  test('if the list had one blog return the 1 blog author and likes', () => {
    const blogs = [
      {
        title: 'Book title 2',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 6,
      },
    ]
    const mostLikes = listHelper.mostLikes(blogs)
    assert.deepStrictEqual(mostLikes, { author: 'Sylvester Dsouza', likes: 6 })
  })

  test('if the list had multiple blogs return the author and most sum total likes', () => {
    const blogs = [
      {
        title: 'Book title 2',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 6,
      },
      {
        title: 'Book title 3',
        author: 'Vinita Dsouza',
        url: 'http://localhost',
        likes: 2,
      },
      {
        title: 'Book title 4',
        author: 'Noah Dsouza',
        url: 'http://localhost',
        likes: 1,
      },
      {
        title: 'Book title 5',
        author: 'Noah Dsouza',
        url: 'http://localhost',
        likes: 2,
      },
      {
        title: 'Book title 6',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 6,
      },
    ]
    const mostLikes = listHelper.mostLikes(blogs)
    assert.deepStrictEqual(mostLikes, { author: 'Sylvester Dsouza', likes: 12 })
  })

  test('returns one of the authors with highest likes when tied', () => {
    const blogs = [
      {
        title: 'Book title 2',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 6,
      },
      {
        title: 'Book title 3',
        author: 'Vinita Dsouza',
        url: 'http://localhost',
        likes: 2,
      },
      {
        title: 'Book title 4',
        author: 'Noah Dsouza',
        url: 'http://localhost',
        likes: 6,
      },
      {
        title: 'Book title 5',
        author: 'Noah Dsouza',
        url: 'http://localhost',
        likes: 6,
      },
      {
        title: 'Book title 6',
        author: 'Sylvester Dsouza',
        url: 'http://localhost',
        likes: 6,
      },
    ]
    const mostLikes = listHelper.mostLikes(blogs)
    assert.strictEqual(mostLikes.likes, 12)
    assert.ok(['Sylvester Dsouza', 'Noah Dsouza'].includes(mostLikes.author))
  })
})
