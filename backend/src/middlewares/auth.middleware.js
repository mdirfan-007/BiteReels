const foodPartnerModels = require('../models/foodpartner.model');
const jwt = require('jsonwebtoken');
const userModels = require('../models/user.model');

async function authenticateFoodPartner(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
             message: 'Plz login to access this resource' 
            });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const foodPartner = await foodPartnerModels.findById(decoded.id);
        req.foodPartner = foodPartner;
        next();
    } catch (error) {
        return res.status(401).json({
             message: 'Invalid Token. Plz login again' 
            });
    }

}


async function authenticateUser(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
             message: 'Plz login to access this resource' 
            });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModels.findById(decoded.id);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
             message: 'Invalid Token. Plz login again' 
            });
    }
}

module.exports = {
    authenticateFoodPartner,
    authenticateUser
};
