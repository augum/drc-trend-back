const ArticleModel = require('../models/article.model')

module.exports.getPArticle = async (req, res) => {
  const posts = await ArticleModel.find()
  res.status(200).json(posts)
}

module.exports.setPArticle = async (req, res) => {
  if (!req.body.nom) {
    res.status(400).json({ message: "Merci d'ajouter un message" })
  }

  const post = await ArticleModel.create({
    nom: req.body.nom,
    marche: req.body.marche,
  })
  res.status(200).json(post)
}

module.exports.editArticle = async (req, res) => {
  const post = await ArticleModel.findById(req.params.id)

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" })
  }

  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  })

  res.status(200).json(updatePost)
}

module.exports.deleteArticle = async (req, res) => {
  const post = await PostModel.findById(req.params.id)

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" })
  }
  await post.deleteOne({ _id: post })
  res.status(200).json('Message supprimé ' + req.params.id)
}

module.exports.likeArticle = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.nom } },
      { new: true },
    ).then((data) => res.status(200).send(data))
  } catch (err) {
    res.status(400).json(err)
  }
}

module.exports.dislikeArticle = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
      { new: true },
    ).then((data) => res.status(200).send(data))
  } catch (err) {
    res.status(400).json(err)
  }
}
