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
    percent_price_mois: {
      type: Number,
    },
    percent_price_6mois: {
      type: Number,
    },
    percent_price_year: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('article', articleSchema)
