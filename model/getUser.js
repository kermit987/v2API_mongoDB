const { User } = require('./userSchema')

const getUser = (username, email) => {
  return new Promise((resolve, reject) => {
    User.find({
      $or: [{ email, username }],
    }).then((result) => { resolve(result) })
      .catch((err) => { reject(err) })
  })
}

module.exports = {
  getUser,
}
