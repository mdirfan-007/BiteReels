const foodpartnerModel = require("../models/foodpartner.model");
const totalFood = require('../models/food.model')




async function getFoodPartnerById(req, res) {
  const foodPartnerId = req.params.id;
  const foodPartner = await foodpartnerModel.findById(foodPartnerId);
   const totalFoodByFoodPartner = await totalFood.find({ foodPartner: foodPartnerId });
  
  
  if (!foodPartner) {
    return res.status(404).json({ message: "Food Partner not found" });
  }
  res.status(200).json({
    message: "Food Partner fetched successfully",
    foodPartner:{
       ...foodPartner.toObject(),
        foodItems: totalFoodByFoodPartner
    }
  });
}
module.exports = {
  getFoodPartnerById,
};