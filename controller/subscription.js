const { createUser } = require('../model')
const {
  checkData,
  doesPasswordMatches,
  checkUserAlreadyExist,
} = require('./checkFunction')

const subscription = async (req, res) => {
  const {
    body: {
      name, lastname, username, email, password, confirmationPassword,
    }
  } = req
  try {
    await checkData(name, lastname, username, email, password, confirmationPassword)
    await doesPasswordMatches(password, confirmationPassword)
    await checkUserAlreadyExist(username, email)
    await createUser(name, lastname, username, email, password)
    res.status(200).send()
  } catch (e) {
    
  }
}

module.exports = {
  subscription,
}
