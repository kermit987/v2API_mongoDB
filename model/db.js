const mongoose = require('mongoose')

mongoose.connect('mongodb://forInterview:poss3id0n@ds153003.mlab.com:53003/apirestfull')

const db = mongoose.connection

db.on('error', () => { throw new Error('Connection to database failed') })

module.exports = {
  db,
}
