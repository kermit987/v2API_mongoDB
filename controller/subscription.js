const { createUser } = require('../model')
const {
  MissingData,
  PasswordMatches,
  UserAlreadyExist,
} = require('../error')
const {
  checkData,
  doesPasswordMatches,
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
    doesPasswordMatches(password, confirmationPassword)
    await checkUserAlreadyExist(username, email)
    await createUser(name, lastname, username, email, password)
    return res.status(200).send()
  } catch (e) {
    switch (e.constructor) {
      case MissingData: return res.status(200).send()
      case PasswordMatches: return res.status(200).send()
      case UserAlreadyExist: return res.status(200).send()
      default: return res.status(501).send()
    }
  }
}

module.exports = {
  subscription,
}
