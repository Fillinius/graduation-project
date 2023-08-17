const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    name: { type: String, require: true, unique: true },
    password: { type: String, unique: true },
    email: { type: String, require: true, unique: true },
  },
  {
    timestamps: true,
  }
)
module.exports = model('User', schema)
