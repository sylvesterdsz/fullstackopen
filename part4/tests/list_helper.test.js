const { test } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns 1', () => {
  const blogs = []
  const dummyValue = listHelper.dummy(blogs)
  assert.strictEqual(dummyValue, 1)
})
