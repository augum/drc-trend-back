const express = require('express')
const { getEvoprix, addEvoprix } = require('../controllers/evoprix.controller')

const evorouter = express.Router()

evorouter.get('/:id', getEvoprix)
evorouter.post('/', addEvoprix)

module.exports = evorouter
