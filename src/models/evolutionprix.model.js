const mongoose = require('mongoose')
const prixSchema = mongoose.Schema(
  {
    prix: {
      type: Number,
      required: true,
    },
    idArticle: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('evoprix', prixSchema)
