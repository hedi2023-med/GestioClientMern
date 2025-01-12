const router = require('express').Router()
const ClientController = require('../controllers/Client')






router.post('/create',ClientController.create)


router.get('/', ClientController.getAll);


router.get('/:clientId', ClientController.getById);


router.put('/:clientId', ClientController.Update);


router.delete('/:clientId', ClientController.delete);


module.exports = router
