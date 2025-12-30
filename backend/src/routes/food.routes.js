const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});
/*POST /api/food/create [Protected]*/
router.post(
  "/create",
  authMiddleware.authenticateFoodPartner,
  upload.single("video"),
  foodController.createFood
);

/* GET /api/food/getAll [Protected]*/

router.get(
  "/getAll",
  authMiddleware.authenticateFoodPartner,
  foodController.getAllFoodItems
); 

module.exports = router;
