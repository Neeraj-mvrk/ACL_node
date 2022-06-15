const constant  = require('../config/constant');

function validateProductGet(user){
return(
   user.role == constant.ROLE.ADMIN ||
   user.role == constant.ROLE.SUPPORTER||
   user.role == constant.ROLE.CUSTOMER ||
   user.role == constant.ROLE.SELLER   
)
}

function validateProductPost(user){
    return(
       user.role == constant.ROLE.ADMIN ||
       user.role == constant.ROLE.SELLER   
    )
    }

function validateProductUpdate(user){
    return(
        user.role == constant.ROLE.ADMIN ||
        user.role == constant.ROLE.SELLER   
    )
    }

function validateProductDelete(user){
    return(
        user.role == constant.ROLE.ADMIN ||
        user.role == constant.ROLE.SUPPORTER 
    )
    }
    

module.exports={
    validateProductGet,
    validateProductPost,
    validateProductUpdate,
    validateProductDelete
}