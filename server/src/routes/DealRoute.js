const router = require('express').Router()
const { param } = require('express-validator')
const mongoose = require('mongoose');
const DealController = require('../controllers/Deal')



router.post(
    '/create/:clientId',
    param('clientId').custom(value => {

        if (!mongoose.Types.ObjectId.isValid(value)) {
            return Promise.reject('invalid id')
        } else return Promise.resolve()
    }), DealController.create
);

router.get(
    '/:clientId',
    param('clientId').custom(value => {

        if (!mongoose.Types.ObjectId.isValid(value)) {
            return Promise.reject('invalid id')
        } else return Promise.resolve()
    }), DealController.getByClientId
);
router.get('/getbyid/:DealId',DealController.getById);
router.put('/update/:DealId',DealController.update);
router.delete('/delete/:DealId',DealController.delete);


module.exports = router
