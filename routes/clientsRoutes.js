
// Client Routes 

const express = require('express')
const router = express.Router()
const {getClients,getClientsById, postClients, putClients, deleteClients} =require('../controllers/clientsController')

router.route('/').get(getClients).post(postClients)
router.route('/:id').get(getClientsById)
router.route('/:id').put(putClients).delete(deleteClients)

module.exports= router