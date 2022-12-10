//import koa

const Koa =require('Koa')
const cors = require("@koa/cors");
const bodyParser =require('koa-bodyparser')
const productRoutes =require('./routes/products.routes')

const app = new Koa();
app.use(cors());
const port = 9001;
app.use(bodyParser());
app.use(productRoutes.routes()).use(productRoutes.allowedMethods());
app.listen(port);
console.log("Server running in "+port+"!!!!!!:)");

