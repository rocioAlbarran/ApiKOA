const fs = require('fs');
//Guardando proveedor
const save = async({nombre, razonsocial,direccion})=>{
    
    let rawdata = fs.readFileSync('resources/data.json');
    let proveedores = JSON.parse(rawdata);
    let flag =0;
    let tmpId=0
    const proveedorNuevo = {
        "nombre":nombre,
        "razonsocial": razonsocial,
        "direccion":direccion,
        "col5":"Eliminar"
    }
    proveedores.map(proveedor=> {
        //valida si el proveedor ya existe
        tmpId = proveedor.id;
       if(proveedor.razonsocial == proveedorNuevo.razonsocial){
            flag = 1
            return false
        }
    }
    )
    if(flag<1)
    {
        //SE agrega el proveedor
        proveedorNuevo.id = tmpId+1
        
        proveedores.push(proveedorNuevo)
        let data = JSON.stringify(proveedores);
        fs.writeFileSync('resources/data.json', data);
    }else{
        //NO se agrega el proveedor
        proveedorNuevo.id = -1
    }
    return proveedorNuevo;
}
const getAll = async()=>{
    console.log("consultando proveedores");
    let rawdata = fs.readFileSync('resources/data.json');
    let proveedores = JSON.parse(rawdata);
    //let proveedores = rawdata;
    //console.log("PROVEEDORES en get: "+proveedores);
    //console.log("PROVEEDOR 0 en get: "+proveedores[0].nombre);
    
    return proveedores;
}
const removeById = async id => {
    console.log("Borrando al prov "+id);
    let numItem=0
    let flag =0;
    
    let rawdata = fs.readFileSync('resources/data.json');
    let proveedores = JSON.parse(rawdata);
    console.log("elementos "+proveedores.length)
    proveedores.map(proveedor=> {
        //valida si el ID proveedor se encuentra en el array
        console.log("proveedor.id: "+proveedor.id)
        if(proveedor.id == id){
            console.log("borrando el "+proveedor.id)
            console.log("numItem  "+numItem)
                proveedores.splice(numItem,1)
                console.log("elementos "+proveedores.length)
                flag =1 
        }
        numItem=numItem+1
    }
    )
    //if(flag<1){ 
        console.log("reescribiendo el archivo")
        let data = JSON.stringify(proveedores);
        fs.writeFileSync('resources/data.json', data);
    //}
}
module.exports = {
    save,
    getAll,
    removeById
}