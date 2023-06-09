const evoprixModel = require('../models/evolutionprix.model')

module.exports.getEvoprix = async (req, res) => {
  const evolus = await evoprixModel.find({ idArticle: req.params.id })
  res.status(200).json(evolus)
}

module.exports.addEvoprix = async (req, res) => {
  if (!req.body.prix) {
    res.status(400).json({ message: "Merci d'ajouter un message" })
  }

  const post = await evoprixModel.create({
    prix: req.body.prix,
    idArticle: req.body.idArticle,
  })
  res.status(200).json(post)
}
