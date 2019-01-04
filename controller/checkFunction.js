const error = require('../error')

const checkData = (name, lastname, username, email, password, confirmationPassword) => {
  if (!name || !lastname || !username || !password || !confirmationPassword)
    throw new MissingData('field can\'t be blank')
}

const checkPasswordMatches = (password, confirmationPassword) => {
  if (!(password === confirmationPassword))
    throw new Error('Password doesn\'t matches')
}

const checkUserAlreadyExist = (username, email) => {

}

module.exports = {
  checkData,
  checkPasswordMatches,
  checkUserAlreadyExist
}