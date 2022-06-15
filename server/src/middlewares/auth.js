const db  = require('../config/db');
const jwt = require('../helpers/jwt');


async function authentication(req,res,next){
    try {
        const jwtToken = req.get("authorization");
        if(!jwtToken){
            res.status(400)
            res.send('No token found');
            return;
        }
        req.user = await jwt.verifyJwtToken(jwtToken);
        const userData = db.query(`SELECT* FROM users WHERE id = ${req.user.id}`);
        if(!userData){
            res.status(401)
            res.send('Token Expired')
        }
        next()
    } catch (error) {
        throw error;       
    }
}

module.exports={
    authentication 
}

