const { createUser } = require('../model')
const {
  MissingData,
  PasswordMatches,
  UserAlreadyExist,
} = require('../error')
const {
  checkData,
  checkPassword,
  checkUserAlreadyExist,
} = require('./checkFunction')

const subscription = async (req, res) => {
  const {
    body: {
      name, lastname, username, email, password, confirmationPassword,
    },
  } = req
  try {
    checkData(name, lastname, username, email, password, confirmationPassword)
    checkPassword(password, confirmationPassword)
    await checkUserAlreadyExist(username, email)
    await createUser(name, lastname, username, email, password)
    return res.status(200).send()
  } catch (e) {
    switch (e.constructor) {
      case MissingData:
        return res.status(200).send('data missing')
      case PasswordMatches:
        return res.status(400).send('password doesnt match')
      case UserAlreadyExist:
        return res.status(409).send('user already exist')
      default:
        return res.status(501).send()
    }
  }
}

module.exports = {
  subscription,
}
