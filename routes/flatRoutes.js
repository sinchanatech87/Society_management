const express =require("express");
const router = express.Router();
const{createFlat , getFlats}=require("../controllers/flatController");
const authMiddleware=require("../middleware/authMiddleware");


router.post("/flats", authMiddleware, createFlat);
router.get("/flats", authMiddleware, getFlats);

module.exports=router;
