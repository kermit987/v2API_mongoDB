module.exports = class PasswordMatches extends Error {
  constructor(message) {
    super(message)
    this.name('PasswordMatches')
  }
}
