const User = require('./userSchema')

const createUser = (name, lastname, username, email, password) => {
  const newUser = new User({
    name, lastname, username, email, password,
  })
  return new Promise((resolve, reject) => {
    newUser.save()
      .then((product) => { resolve(product) })
      .catch((err) => { reject(err) })
  })
}

module.exports = {
  createUser,
}
