const foodModel = require("../models/food.model");
const storageService = require("../services/storage.server");
const { v4: uuid } = require("uuid");
// Food controller logic here

async function createFood(req, res) {
  const fileUploadResponse = await storageService.uploadFile(
    req.file.buffer,
    uuid()
  );

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResponse.url,
   foodPartner: req.foodPartner._id
  });
  res.status(201).json({
    message: "Food item created successfully",
    food: foodItem,
  });

  
}
async function getAllFoodItems(req, res) {
  const foodItems = await foodModel.find({});
  res.status(200).json({
    message: "Food items fetched successfully",
   foodItems,
  });
}
module.exports = {
  createFood,
  getAllFoodItems
};
