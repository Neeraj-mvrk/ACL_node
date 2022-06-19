const db = require('../config/db');

async function createProduct(req,res){
    try {
        if(req.body){
            let body = req.body;
            let query = {
                text: 'INSERT INTO public.products(product_name,manufacturer,model,year) VALUES($1,$2,$3,$4)',
                values: [body.product_name,body.manufacturer,body.model,body.year]
            }
            let data = await db.query(query);
            return {
                message:"Product Created!",
                data:[]
            };
        }
        
    } catch (error) {
        throw error;
    }
}
async function getProducts(req,res){
    try {
            let query = {
                text: 'SELECT* FROM public.products',
                values: []
            }
            let data = await db.query(query);
            return {
                message:"Products sent successfully!",
                data:data
            };        
    } catch (error) {
        throw error;
    }
}
async function updateProduct(req,res){
    try {
        if(req.body){
            let body = req.body;
            let query = 'UPDATE public.products SET';
            if (body.product_name) {
                query = `${query} product_name = '${body.product_name}',`
            }
            if (body.manufacturer) {
                query = `${query} manufacturer = '${body.manufacturer}',`
            }
            if (body.model) {
                query = `${query} model = '${body.model}',`
            }
            if (body.year) {
                query = `${query} year = '${body.year}'`
            }
            query = `${query}  WHERE id = ${body.id} RETURNING id`;
            let uQuery = {
                text: query }
            let data = await db.query(uQuery);
            return {
                message:"Products updated successfully!",
                data:data
            };
        }
    } catch (error) {
        throw error;
    }
}
async function  deleteProduct(req,res){
    try {
        if(req.body){
            console.log(req.body,"::::BODY")
            let body = req.body;
            query ={
                text: 'delete from public.products where id = $1 RETURNING id',
                values: [body.id]
        }   
        let data = await db.query(query);
            return {
                message:"Products deleted successfully!",
                data:data
            }; 
        }
        
    } catch (error) {
        throw error;
    }
}
module.exports={
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}