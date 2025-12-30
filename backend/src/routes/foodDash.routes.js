const express = require('express');
const foodDashController = require('../controllers/foodDash.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();


// /api/foodDash/:id - Get Food Partner by ID

router.get('/:id',
    authMiddleware.authenticateFoodPartner,
    foodDashController.getFoodPartnerById    
)


module.exports = router;