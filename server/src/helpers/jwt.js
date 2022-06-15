const jwt = require('jsonwebtoken');
const constant = require('../config/constant');


async function generateToken(params, expiryTime = '24000h'){
    try {
        const options = {
            algorithm: 'HS384',
            expiresIn: expiryTime
        };

        return await jwt.sign(params, constant.JWT_SECRET_KEY, options);
    } catch (e) {
        console.log("Error generate tokken::", e);
        throw e;
    }
}

async function  verifyJwtToken(token){
    try {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        return await jwt.verify(token, constant.JWT_SECRET_KEY, { algorithms: ['HS384'] });
    } catch (err) {
        throw err;
    }
}

module.exports={
    generateToken,
    verifyJwtToken
}