module.exports = class MissingData extends Error {
  constructor(message) {
    super(message)
    this.name = 'MissingData'
  }
}
