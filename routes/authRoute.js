import express from 'express'
import {registerController , loginController,testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controllers/authController.js';
import {isAdmin, requiresignIn} from '../middleware/authMiddleware.js';



// route object

const router = express.Router()


// routing
//REGISTER || METHOD POST
router.post('/register',registerController);


// LOGIN || POST
router.post('/login', loginController);

//Forgot password || POST
router.post('/forgot-password',forgotPasswordController)

// test routes
router.get('/test',requiresignIn,isAdmin ,testController);


// protected User route auth
router.get('/user-auth',requiresignIn , (req,res)=>{
    res.status(200).send({ok:true});
});
// protected Admin route auth
router.get('/admin-auth',requiresignIn ,isAdmin, (req,res)=>{
    res.status(200).send({ok:true});
});


//update profile
router.put("/profile", requiresignIn, updateProfileController);

//orders
router.get("/orders", requiresignIn, getOrdersController);

//all orders
router.get("/all-orders", requiresignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
    "/order-status/:orderId",
    requiresignIn,
    isAdmin,
    orderStatusController
  );

export default router