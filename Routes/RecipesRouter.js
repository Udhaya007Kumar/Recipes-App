import express from "express";
import {  createRecipes, getrecipes, getRecipesID, recepiesDelete, recipesUpdate } from "../Controllers/RecipeController.js";



const router = express.Router();

router.get("/getrecipes",getrecipes)
router.get("/getrecipes/:id",getRecipesID)
router.post("/create",createRecipes)
router.put("/update/:id",recipesUpdate)
router.delete("/delete/:id",recepiesDelete)





export default router;