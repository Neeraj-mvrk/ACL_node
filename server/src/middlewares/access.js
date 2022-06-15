const product = require('../permission/product');

async function canViewProduct(req,res,next){
    if(!product.validateProductGet(req.user)){
     res.status(401)
        return res.send('Not authorized to access endpoint') 
    }
    next();
}

async function canPostProduct(req,res,next){
    if(!product.validateProductPost(req.user)){
     res.status(401)
        return res.send('Not authorized to access endpoint') 
    }
    next();
}

async function canUpdateProduct(req,res,next){
    if(!product.validateProductUpdate(req.user)){
     res.status(401)
        return res.send('Not authorized to access endpoint') 
    }
    next();
}

async function canDeleteProduct(req,res,next){
    if(!product.validateProductDelete(req.user)){
     res.status(401)
        return res.send('Not authorized to access endpoint') 
    }
    next();
}

module.exports={
    canViewProduct,
    canPostProduct,
    canUpdateProduct,
    canDeleteProduct
}