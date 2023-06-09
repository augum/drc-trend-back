const mongoose = require('mongoose')

const articleSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    marche: {
      type: String,
    },
    likers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('article', articleSchema)
