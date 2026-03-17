const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blogs) => blogs.likes + sum, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null

  return blogs.reduce((favorite, blog) =>
    blog.likes > favorite.likes ? blog : favorite,
  )
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null

  const result = _(blogs)
    .groupBy('author') // group blogs by author
    .map((blogs, author) => ({
      // turn into array of objects
      author,
      blogs: blogs.length,
    }))
    .maxBy('blogs') // find author with most blogs

  return result
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null

  return _(blogs)
    .groupBy('author')
    .map((blogs, author) => ({
      author,
      likes: _.sumBy(blogs, 'likes'),
    }))
    .maxBy('likes')
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
