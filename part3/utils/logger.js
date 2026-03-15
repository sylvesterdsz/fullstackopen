const info = (...params) => {
  console.log(new Date().toISOString(), ...params)
}

const error = (...params) => {
  console.error(...params)
}

module.exports = { info, error }
