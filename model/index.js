module.exports = {
  ...require('./db.js'),
  ...require('./userSchema.js'),
  ...require('./getUser.js'),
  ...require('./createUser.js')
}
