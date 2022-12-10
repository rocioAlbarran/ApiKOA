const{save,getAll,removeById}= require('../dal/products.dao')
//Map save method
const createProduct = async({nombre, razonsocial, direccion}) =>{
    const proveedor = {
        nombre,
       razonsocial,
        direccion
    }
    return await save(proveedor);
}
//Map getAll method
const getProvedores = async() =>{
    return await getAll();
}
const deleteProduct = async id =>{
    return await removeById(id);
}
module.exports={
    createProduct,
    getProvedores,
    deleteProduct
}