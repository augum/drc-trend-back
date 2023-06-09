const express = require('express')
const {
  getPArticle,
  setPArticle,
  editArticle,
  deleteArticle,
  likeArticle,
  dislikeArticle,
} = require('../controllers/post.controller')

const router = express.Router()

router.get('/', getPArticle)
router.post('/', setPArticle)
router.put('/:id', editArticle)
router.delete('/:id', deleteArticle)
router.patch('/like-post/:id', likeArticle)
router.patch('/dislike-post/:id', dislikeArticle)

module.exports = router
