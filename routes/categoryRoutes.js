
import express from 'express';
import { isAdmin, requiresignIn } from '../middleware/authMiddleware.js';
import { categoryControlller, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';


const router = express.Router()


// routes
// create category

router.post('/create-category', requiresignIn,isAdmin , createCategoryController);


// update category
router.put('/update-category/:id',requiresignIn,isAdmin, updateCategoryController);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
    "/delete-category/:id",
    requiresignIn,
    isAdmin,
    deleteCategoryController
  );
  



export default router ;