const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    vendor_code: { type: String, require: true },
    name: { type: String },
    type: { type: Schema.Types.ObjectId, ref: 'Types' },
    image: { type: String },
    size: { type: Schema.Types.ObjectId, ref: 'Size' },
    qualites: [{ type: Schema.Types.ObjectId, ref: 'Quality' }],
    price: Number,
  },
  {
    timestamps: true,
  }
)
module.exports = model('Furniture', schema)
