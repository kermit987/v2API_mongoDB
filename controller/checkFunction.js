const {
  MissingData,
  PasswordMatches,
  UserAlreadyExist,
} = require('../error')

const { getUser } = require('../model')

const checkData = (name, lastname, username, email, password, confirmationPassword) => {
  if (!name || !lastname || !email || !username || !password || !confirmationPassword) {
    throw new MissingData('field can\'t be blank')
  }
}

const checkPassword = (password, confirmationPassword) => {
  if (!(password === confirmationPassword)) {
    throw new PasswordMatches('Password doesn\'t matches')
  }
}

const checkUserAlreadyExist = async (username, email) => {
  const result = await getUser(username, email)
  if (result.length) {
    throw new UserAlreadyExist('User already exist')
  }
}

module.exports = {
  checkData,
  checkPassword,
  checkUserAlreadyExist,
}
