const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('../helpers/jwt')
async function createUser(req,res){
    try {
        if(req.body){
            let body = req.body;
            const saltRounds = 10;
            body.password = await bcrypt.hash(body.password, saltRounds);
            let query = {
                text: 'INSERT INTO public.users(username,password,role) VALUES($1,$2,$3)',
                values: [body.username,body.password,body.role]
            }
            let data = await db.query(query);
            return {
                message:"User Created!",
                data:[]
            };
        }
        
    } catch (error) {
        throw error;
    }
}

async function loginUser(req,res){
    try {
        if(req.body){
            let body = req.body;
            let query = {
                text: 'SELECT* FROM public.users WHERE username = $1',
                values: [body.username]
            };

            let response={};   
            let data = await db.query(query);
            console.log(data,":::::DATA")
            if(!data){
                res.status(400);
                response.data={};
                response.message='User not found';
                return response;
            }else{
              let result = await bcrypt.compare(body.password, data.password);
              if(!result){
                res.status(400);
                response.data={};
                response.message='Password not matched';
                return response;   
              }else{
                  res.status(200);
                  response.data = {
                      token : await jwt.generateToken(data),
                      role: data.role
                  }
                  response.message='User logged In';
                  return response;
              }
            }

        }
        
    } catch (error) {
        throw error;
    }
}

module.exports={
    createUser,
    loginUser
}