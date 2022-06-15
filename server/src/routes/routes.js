//server/routes/routes.js
const express = require('express');
const router = express.Router();
const access  = require('../middlewares/access');
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');


router.get('/', function(req, res){
  res.send('Hello World')
});


router.post('/login', async(req, res)=>{
  let result = await userController.loginUser(req,res); 
  res.send(result);
})

router.post('/signup', async (req,res)=>{
 let result = await userController.createUser(req,res);
 res.send(result);
})

router.get('/products', auth.authentication, access.canViewProduct, async (req,res)=>{
  let result = await productController.getProducts(req,res);
  res.send(result);  
})

router.post('/products', auth.authentication, access.canPostProduct, async(req,res)=>{
  let result = await productController.createProduct(req,res);
  res.send(result);
})

router.put('/products', auth.authentication, access.canUpdateProduct, async(req,res)=>{
  let result = await productController.updateProduct(req,res);
  res.send(result);
  
})

router.delete('/products', auth.authentication, access.canDeleteProduct, async(req,res)=>{
  let result = await productController.deleteProduct(req,res);
  res.send(result);
})

module.exports = router;