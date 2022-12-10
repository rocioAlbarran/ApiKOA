const Router = require('@koa/router');
const{createProduct,getProvedores, deleteProduct}=require('../api/products.api')
//prefijo API
const router = new Router({
    prefix: '/api'
})

//POST request
router.post('/',async ctx=>{
    let product = ctx.request.body;
    product = await createProduct(product);
    if(product.id <0)
        ctx.response.status = 500;
    ctx.response.status = 200;
    ctx.body = product;
})

//GET request
router.get('/',async ctx=>{
    console.log("GET")
    ctx.body = await getProvedores();
})

//DELETE request
router.delete('/:id',async ctx=>{
    console.log("DLETE1")
    const id = ctx.params.id;
    await deleteProduct(id);
})
module.exports = router;